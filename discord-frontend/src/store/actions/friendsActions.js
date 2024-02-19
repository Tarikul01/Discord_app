import { openAlertMessage } from "./alertActions";
import * as api from "../../api";

export const friendsActions = {
  SET_FRIENDS: "FRIENDS.SET_FRIENDS",
  SET_PENDING_FRIENDS_INVITATIONS: "FRIENDS.SET_PENDING_FRIENDS_INVITATIONS",
  SET_ONLINE_USERS: "FRIENDS_ONLINE_USERS",
};

export const getActions = (dispatch) => {
  return {
    sendFriendInviations: (data, closeDialogHandler) =>
      dispatch(sendFriendInvitation(data, closeDialogHandler)),
      acceptFriendInvitation:(data)=>dispatch(acceptFriendInvitations(data)),
      rejectFriendInvitation:(data)=>dispatch(rejectFriendInvitations(data)),

  };
};

export const setPendingFriendsInvitations=(pendingFriendsInvitations)=>{
  return {
    type:friendsActions.SET_PENDING_FRIENDS_INVITATIONS,
    pendingFriendsInvitations, 
  }
}
export const setFriends=(friends)=>{
  return {
    type:friendsActions.SET_FRIENDS,
    friends,

  }
}
export const setOnlineUsers=(onlineUsers)=>{
  return {
    type:friendsActions.SET_ONLINE_USERS,
    onlineUsers,
  }
}

const sendFriendInvitation = (data, closeDialogHandler) => {
  return async (dispatch) => {
    const response = await api.sendFriendInviations(data);

    if (response.error) {
      dispatch(openAlertMessage(response.exception?.response?.data));
    } else {
      dispatch(openAlertMessage("Invitation has been sent!"));
      closeDialogHandler();
    }
  };
};
const acceptFriendInvitations=(data)=>{
  return async (dispatch)=>{
    const response=await api.acceptFriendInvitations(data);
    if (response.error) {
      dispatch(openAlertMessage(response.exception?.response?.data));
    } else {
      dispatch(openAlertMessage("Invitation accepted!"));
      
    }

  }

}
const rejectFriendInvitations=(data)=>{
  return async (dispatch)=>{
    const response=await api.rejectFriendInvitations(data);
    if (response.error) {
      dispatch(openAlertMessage(response.exception?.response?.data));
    } else {
      dispatch(openAlertMessage("Invitation reject!"));
      
    }

  }
  
}
