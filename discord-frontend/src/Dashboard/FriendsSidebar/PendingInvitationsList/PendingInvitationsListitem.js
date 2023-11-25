import React, { useState } from "react";
import { Tooltip, Box, Typography } from "@mui/material";
import Avatar from "../../../shared/components/Avatar";
import InvitationDecisionButtons from "./InvitationDecisionButtons";

const PendingInvitationsListitem = ({
  id,
  username,
  mail,
  acceptFriendInvitation = () => {},
  rejectFriendInvitation = () => {},
}) => {
  const [buttonsDisable, setButtonsDisable] = useState(false);
  const handleAcceptInvitation = () => {
    acceptFriendInvitation({ id });
    setButtonsDisable(true);
  };
  const handleRejectInvitation = () => {
    rejectFriendInvitation({ id });
    setButtonsDisable(true);
  };
  return (
    <Tooltip title={mail}>
      <div style={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            height: "42px",
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Avatar username={username} />
          <Typography
            sx={{
              marginLeft: "7px",
              fontWeight: 700,
              color: "#8e9297",
              flexGrow: 1,
            }}
            variant="subtitle1"
          >
            {username}
          </Typography>
        <InvitationDecisionButtons
          disabled={buttonsDisable}
          acceptInvitationHandler={handleAcceptInvitation}
          rejectInvitationHandler={handleRejectInvitation}
        />
        </Box>
      </div>
    </Tooltip>
  );
};

export default PendingInvitationsListitem;
