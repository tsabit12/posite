/* eslint-disable no-undef */
import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { DataFormater } from "../../../../utils";

const CardLayout = styled(Paper)({
  borderRadius: "10px",
  boxShadow: "0px 30px 40px rgba(0, 0, 0, 0.02)",
  background: "#FFFFFF",
  padding: "21px 13px",
});

const TopUsers = ({ list }) => {
  return (
    <Grid container spacing={"26px"}>
      {list.map((row, index) => (
        <Grid
          item
          sm={12}
          md={6}
          xs={12}
          lg={4}
          key={index}
          sx={{ height: "100%" }}
        >
          <CardLayout elevation={0}>
            <Stack direction={"row"} spacing="32px" alignItems={"center"}>
              <img
                alt={row.name}
                src={row.imageUrl}
                style={{
                  width: "99px",
                  height: "99px",
                  borderRadius: "50px",
                  marginLeft: "28px",
                }}
              />
              <Stack spacing={"10px"} sx={{ width: "100%" }}>
                <Box>
                  <Typography
                    variant="subtitle2"
                    color="#030229"
                    fontWeight={"700"}
                  >
                    {row.name}
                  </Typography>
                  <Typography variant="body1" color="rgba(37, 39, 63, 0.4)">
                    Level {row.level}
                  </Typography>
                </Box>
                <Stack
                  direction={"row"}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Stack spacing={"5px"}>
                    <Stack direction="row" alignItems="center" spacing={"12px"}>
                      <img
                        src={`${process.env.REACT_APP_PUBLIC_URL}/assets/icon/ic_round-control-point.svg`}
                        alt={`icon-plus${index}`}
                        style={{
                          width: "24px",
                          height: "24px",
                        }}
                      />
                      <Typography variant="body1">
                        <span style={{ color: "#4A3AFF", fontWeight: "600" }}>
                          {DataFormater(row.contribution)}
                        </span>{" "}
                        Kontribusi
                      </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={"12px"}>
                      <img
                        src={`${process.env.REACT_APP_PUBLIC_URL}/assets/icon/flat-color-icons_like.svg`}
                        alt={`icon-love${index}`}
                        style={{
                          width: "24px",
                          height: "24px",
                        }}
                      />
                      <Typography variant="body1">
                        <span style={{ color: "#4A3AFF", fontWeight: "600" }}>
                          {DataFormater(row.like)}
                        </span>{" "}
                        Suka
                      </Typography>
                    </Stack>
                  </Stack>
                  <img
                    src={`${
                      process.env.REACT_APP_PUBLIC_URL
                    }/assets/icon/medal${index + 1}.svg`}
                    alt={`medal${index}`}
                  />
                </Stack>
              </Stack>
            </Stack>
          </CardLayout>
        </Grid>
      ))}
    </Grid>
  );
};

TopUsers.propTypes = {
  list: PropTypes.array.isRequired,
};

export default TopUsers;
