import React from "react";
import { styled } from "@mui/system";
import DropdownMenu from "./DropdownMenu";
import ChosenOptionLebel from "./ChosenOptionLebel"
const MainContainer = styled("div")({
  position: "absolute",
  top: "1",
  right: "7px",
  height: "48px",
  borderBottom: "1px solid black",
  backgroundColor: "#36393F",
  width: "calc(100% - 335px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 12px",
});
const AppBar = () => {
  return (
    <MainContainer>
    <ChosenOptionLebel/>
      <DropdownMenu />
    </MainContainer>
  );
};

export default AppBar;
