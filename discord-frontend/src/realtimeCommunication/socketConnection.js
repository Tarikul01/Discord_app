import io from "socket.io-client";
import {
  setPendingFriendsInvitations,
  setFriends,
  setOnlineUsers,
} from "../store/actions/friendsActions";
import store from "../store/store";
import { updateDirectChatHistoryIfActive } from "../shared/utils/chat";

let socket = null;
export const connectWithSocketServer = (userDetails) => {
  const jwtToken = userDetails.token;

  socket = io("http://localhost:5000", {
    auth: {
      token: jwtToken,
    },
  });
  socket.on("connect", () => {
    console.log("Successfully connected with socket.io server");
    console.log(socket.id);
  });

  socket.on("friends-invitations", (data) => {
    const { pendingInvitations } = data;
    store.dispatch(setPendingFriendsInvitations(pendingInvitations));
  });
  socket.on("friends-list", (data) => {
    const { friends } = data;
    store.dispatch(setFriends(friends));
  });
  socket.on("online-users", (data) => {
    console.log("Active user event came");
    const { onlineUsers } = data;
    store.dispatch(setOnlineUsers(onlineUsers));
  });
  socket.on("direct-chat-history", (data) => {
    console.log("Direct-chat-history by server in socket.on", data);
    updateDirectChatHistoryIfActive(data);
  });
};
export const sendDirectMessage = (data) => {
  socket.emit("direct-message", data);
};
export const getDirectChatHistory = (data) => {
  console.log("Direct-chat-history by server in socket.emit", data);
  socket.emit("direct-chat-history", data);
};
