import styled from "@emotion/styled";
import { Box, Button, Divider, Paper, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { connect } from "react-redux";
import { CustomeInput, CustomFile } from "./components";
import PropTypes from "prop-types";
import api from "../../api";
import { handleAxiosError } from "../../utils";
import { ErrorMessage } from "../../Element";

const CardLayout = styled(Paper)({
  backgroundColor: "#FFF",
  minWidth: "730px",
  padding: "21px 41px",
  borderRadius: "20px",
});

const frameworks = [
  { name: "HTML", value: 1 },
  { name: "React", value: 2 },
  { name: "Bootstrap", value: 3 },
  { name: "Tailwind", value: 4 },
];

const catgories = [
  { name: "Bagian", value: 1 },
  { name: "Element", value: 2 },
  { name: "Headings", value: 3 },
  { name: "Data Display", value: 4 },
  { name: "List", value: 5 },
  { name: "Form", value: 6 },
  { name: "Navigasi", value: 7 },
  { name: "Layout", value: 8 },
  { name: "Banner", value: 9 },
  { name: "Karir", value: 10 },
];

const Uploads = (props) => {
  const [berkas, setberkas] = useState({
    file: null,
    cover: null,
    framework: "00",
    category: "00",
    title: "",
  });
  const [errors, seterrors] = useState({});
  const [loading, setloading] = useState(false);
  const [success, setsuccess] = useState(false);

  const handleChangeFile = (file) => {
    setberkas((prev) => ({ ...prev, file: file.length > 0 ? file : null }));
    seterrors((prev) => ({ ...prev, file: undefined }));
  };

  const handleChangeCover = (file) => {
    setberkas((prev) => ({ ...prev, cover: file.length > 0 ? file : null }));
    seterrors((prev) => ({ ...prev, cover: undefined }));
  };

  const handleChangeSelect = (value, name) => {
    setberkas((prev) => ({ ...prev, [name]: value }));
    seterrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleChangeText = (e) => {
    const { name, value } = e.target;
    setberkas((prev) => ({ ...prev, [name]: value }));
    seterrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const onSubmit = async () => {
    const errors = validate(berkas);
    if (Object.keys(errors).length === 0) {
      setloading(true);

      const formData = new FormData();
      formData.append("framework_id", berkas.framework);
      formData.append("category_id", berkas.category);
      formData.append("title", berkas.title);
      formData.append("email", props.user.email);
      formData.append("source", berkas.file[0]);
      formData.append("source", berkas.cover[0]);

      try {
        await api.source.add(formData);
        setsuccess(true);
      } catch (error) {
        const { message, code } = handleAxiosError(error);
        seterrors({ global: `${code} | ${message}` });
      }

      setloading(false);
    } else {
      seterrors(errors);
    }
  };

  const validate = (field) => {
    const error = {};
    if (!field.title) error.title = "Title is required";
    if (field.framework === "00") error.framework = "Framework is required";
    if (field.category === "00") error.category = "Category is required";
    if (field.file === null) error.file = "File is required";
    if (field.cover === null) error.cover = "File is required";
    return error;
  };

  const handleReset = () => {
    setsuccess(false);
    setberkas({
      file: null,
      cover: null,
      framework: "00",
      category: "00",
      title: "",
    });
  };

  const { file, cover } = berkas;

  return (
    <Stack
      direction={"row"}
      justifyContent="center"
      alignItems={"center"}
      sx={{ height: "80vh" }}
    >
      <ErrorMessage
        open={!!errors.global}
        handleClose={() =>
          seterrors((prev) => ({ ...prev, global: undefined }))
        }
        message={errors.global}
      />

      <ErrorMessage
        severity="success"
        open={success}
        message="200|File successfully uploaded"
        handleClose={handleReset}
      />

      <CardLayout>
        <Stack spacing={"16px"}>
          <Typography variant="cardtitle">Upload File UI Komponen</Typography>
          <Divider />
          <Stack spacing={"17px"}>
            <CustomeInput
              label="Judul Komponen"
              inputProps={{
                placeholder: "Masukan Judul Komponen",
              }}
              type="input"
              name="title"
              value={berkas.title}
              onChange={handleChangeText}
              errors={errors}
            />
            <CustomeInput
              label="Pilih Kategori"
              inputProps={{
                placeholder: "Pilih kategori",
              }}
              type="select"
              name="category"
              onChange={handleChangeSelect}
              options={catgories}
              value={berkas.category}
              errors={errors}
            />
            <CustomeInput
              label="Pilih Framework"
              inputProps={{
                placeholder: "Pilih Framework",
              }}
              type="select"
              name="framework"
              options={frameworks}
              onChange={handleChangeSelect}
              value={berkas.framework}
              errors={errors}
            />
            <Stack direction={"row"} spacing="16px">
              <CustomFile
                name="cover"
                label="Upload Cover"
                value={cover}
                onChange={handleChangeCover}
                errors={errors}
                seterrors={seterrors}
                allowedTypes={["JPEG", "PNG", "JPG", "SVG"]}
              />
              <CustomFile
                name="file"
                label="Upload File"
                value={file}
                onChange={handleChangeFile}
                errors={errors}
                seterrors={seterrors}
                allowedTypes={["HTML"]}
              />
            </Stack>
          </Stack>
          <Box sx={{ height: "2px" }} />
          <Divider />
          <Stack direction={"row"} justifyContent="flex-end">
            <Button
              onClick={onSubmit}
              sx={{ height: "60px" }}
              variant="contained"
              disabled={loading}
            >
              {loading ? "Loading..." : "Simpan"}
            </Button>
          </Stack>
        </Stack>
      </CardLayout>
    </Stack>
  );
};

Uploads.propTypes = {
  user: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    user: state.session,
  };
}

export default connect(mapStateToProps, null)(Uploads);
