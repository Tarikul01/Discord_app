import { Box, IconButton } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

const InvitationDecisionButtons = ({
  disable,
  acceptInvitationHandler,
  rejectInvitationHandler,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <IconButton
        style={{ color: "white" }}
        disable={disable}
        onClick={acceptInvitationHandler}
      >
        <CheckIcon />
      </IconButton>
      <IconButton
        style={{ color: "white" }}
        disable={disable}
        onClick={acceptInvitationHandler}
      >
        <ClearIcon />
      </IconButton>
    </Box>
  );
};

export default InvitationDecisionButtons;
