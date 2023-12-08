import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import {
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Typography,
} from "@mui/material";
import { validateMail } from "../../shared/utils/validators";
import InputWithLabel from "../../shared/components/InputWithLabel";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/friendsActions";
const AddFriendDialog = ({
  isDialogOpen,
  closeDialogHandler,
  sendFriendInviations = () => {},
}) => {
  const [mail, setMail] = useState("");
  const [isFormValid, setIsFormValid] = useState("");
  const handlerSendInvitation = () => {
    // sendFriend Request to server
    sendFriendInviations(
      {
        targetMailAddress: mail,
      },
      handleCloseDialog
    );
  };
  const handleCloseDialog = () => {
    closeDialogHandler();
    setMail("");
  };
  useEffect(() => {
    setIsFormValid(validateMail(mail));
  }, [mail, setIsFormValid]);
  return (
    <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
      <DialogTitle>
        <Typography>Invite a Friend</Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography>
            Enter e-mail address of friend which you would like to invite
          </Typography>
          <InputWithLabel
            label="Mail"
            type="text"
            value={mail}
            setValue={setMail}
            placeholder="Enter mail address!"
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <CustomPrimaryButton
          onClick={handlerSendInvitation}
          disabled={!isFormValid}
          label="Send"
          additionalStyle={{
            marginLeft: "15px",
            marginRight: "15px",
            marginBottom: "10px",
          }}
        />
      </DialogActions>
    </Dialog>
  );
};
const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(AddFriendDialog);
