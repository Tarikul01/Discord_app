import React from "react";
import { Alert, Snackbar } from "@mui/material";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/alertActions";

const AlertNotification = ({
    showAlertMessage,
    closeAlertMessage,
    alertMessageContent
}) => {
  return (
    <Snackbar open={showAlertMessage}
     autoHideDuration={6000} 
    onClose={closeAlertMessage}
    anchorOrigin={{vertical:"bottom",horizontal:"center"}}
    >
      <Alert 
    //   onClose={handleClose}
       severity="info" sx={{ width: "100%" }}>
       {alertMessageContent}
      </Alert>
    </Snackbar>
  );
};
const mapStoreStateToProps=({alert})=>{
    return {
        ...alert,
    };
}
const mapActionsToProps=(dispatch)=>{
    return {
        ...getActions(dispatch)
    }
}

export default connect(mapStoreStateToProps,mapActionsToProps)(AlertNotification);
