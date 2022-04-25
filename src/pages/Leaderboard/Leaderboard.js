import styled from "@emotion/styled";
import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { CurrentUser, TopUsers } from "./components";
import { DataFormater } from "../../utils";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const topusers = [
  {
    name: "Ricky Effendi S.",
    level: 1,
    contribution: 1900,
    like: 20100,
    imageUrl: `${process.env.REACT_APP_PUBLIC_URL}/assets/avatar/people1.svg`,
  },
  {
    name: "Tsabit Abdul A.",
    level: 1,
    contribution: 1900,
    like: 20100,
    imageUrl: `${process.env.REACT_APP_PUBLIC_URL}/assets/avatar/people2.svg`,
  },
  {
    name: "Devti Nabillah C.",
    level: 1,
    contribution: 1900,
    like: 20100,
    imageUrl: `${process.env.REACT_APP_PUBLIC_URL}/assets/avatar/people3.svg`,
  },
  {
    name: "Jhon Doe",
    level: 1,
    contribution: 1900,
    like: 20100,
    imageUrl: `${process.env.REACT_APP_PUBLIC_URL}/assets/avatar/people4.svg`,
  },
  {
    name: "Jhon Doe",
    level: 1,
    contribution: 1900,
    like: 20100,
    imageUrl: `${process.env.REACT_APP_PUBLIC_URL}/assets/avatar/people4.svg`,
  },
  {
    name: "Jhon Doe",
    level: 1,
    contribution: 1900,
    like: 20100,
    imageUrl: `${process.env.REACT_APP_PUBLIC_URL}/assets/avatar/people4.svg`,
  },
  {
    name: "Jhon Doe",
    level: 1,
    contribution: 1900,
    like: 20100,
    imageUrl: `${process.env.REACT_APP_PUBLIC_URL}/assets/avatar/people4.svg`,
  },
  {
    name: "Jhon Doe",
    level: 1,
    contribution: 1900,
    like: 20100,
    imageUrl: `${process.env.REACT_APP_PUBLIC_URL}/assets/avatar/people4.svg`,
  },
  {
    name: "Jhon Doe",
    level: 1,
    contribution: 1900,
    like: 20100,
    imageUrl: `${process.env.REACT_APP_PUBLIC_URL}/assets/avatar/people4.svg`,
  },
];

const CustomTableBody = styled(TableBody)({
  "& .MuiTableCell-root": {
    color: "rgba(37, 39, 63, 0.7)",
    borderBottom: "none",
    backgroundColor: "#FFF",
    fontSize: "16px",
    fontWeight: "400",
    height: "40px",
  },
  ".MuiTableRow-root td:nth-of-type(1)": {
    borderRadius: "40px",
    width: "40px",
  },
  ".MuiTableRow-root td:nth-of-type(2)": {
    backgroundColor: "transparent",
    width: "5px",
  },
  ".MuiTableRow-root td:nth-of-type(3)": {
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
  },
  ".MuiTableRow-root td:last-of-type": {
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
  },
});

const BoldText = styled("span")({
  color: "#4A3AFF",
  fontWeight: "600",
});

const Leaderboard = (props) => {
  const { session } = props;

  const currentuser = {
    name: `${session.firstname} ${session.lastname}`,
    level: 1,
    contribution: 1900,
    like: 20100,
    imageUrl: session.imageurl,
  };

  return (
    <Box>
      <TopUsers list={topusers.slice(0, 3)} />
      <Box sx={{ marginTop: "32px", marginBottom: "10px" }}>
        <Stack direction="row" spacing={"9px"}>
          <img
            src={`${process.env.REACT_APP_PUBLIC_URL}/assets/icon/fluent_people-32-filled.svg`}
            alt="people"
          />
          <Typography variant="body1" color="rgba(37, 39, 63, 0.7)">
            Kontributor Lain
          </Typography>
        </Stack>
      </Box>
      <Table sx={{ borderSpacing: "0px 10px" }}>
        <CustomTableBody>
          {topusers.slice(3).map((row, index) => (
            <TableRow key={index}>
              <TableCell align="center">
                <span style={{ fontSize: "24px" }}>{index + 4}</span>
              </TableCell>
              <TableCell />
              <TableCell>
                <Stack direction={"row"} spacing={"11px"}>
                  <Box
                    sx={{
                      backgroundColor: "#E5E1FB",
                      width: "30px",
                      height: "30px",
                      borderRadius: "15px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={row.imageUrl}
                      alt="user"
                      style={{ width: "100%" }}
                    />
                  </Box>
                  <Typography color="#030229">{row.name}</Typography>
                </Stack>
              </TableCell>
              <TableCell>
                <span style={{ color: "rgba(37, 39, 63, 0.4)" }}>
                  Level {row.level}
                </span>
              </TableCell>
              <TableCell>
                <Stack direction={"row"} spacing={"12px"}>
                  <img
                    src={`${process.env.REACT_APP_PUBLIC_URL}/assets/icon/ic_round-control-point.svg`}
                    alt={`icon-plus${index}`}
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                  <BoldText>{DataFormater(row.contribution)}</BoldText>
                  &nbsp;Kontribusi
                </Stack>
              </TableCell>
              <TableCell>
                <Stack direction={"row"} spacing={"12px"}>
                  <img
                    src={`${process.env.REACT_APP_PUBLIC_URL}/assets/icon/flat-color-icons_like.svg`}
                    alt={`icon-love${index}`}
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                  <BoldText>{DataFormater(row.like)} </BoldText>&nbsp;Suka
                </Stack>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell
              colSpan={6}
              style={{ backgroundColor: "transparent" }}
              align="center"
            >
              <span style={{ fontSize: "24px" }}>---------</span>
            </TableCell>
          </TableRow>
        </CustomTableBody>
        <CurrentUser data={currentuser} />
      </Table>
    </Box>
  );
};

Leaderboard.propTypes = {
  session: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    session: state.session,
  };
}

export default connect(mapStateToProps, null)(Leaderboard);
