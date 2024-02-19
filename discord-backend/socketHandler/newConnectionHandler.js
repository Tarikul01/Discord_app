const { addNewConnectedUser } = require("../serverStore");
const friendsUpdate = require("./updates/friends");

const newConnectionHandler = async (socket, io) => {
  const userDetails = socket.user;
  console.log("newConnectionHandler", socket.id, socket.user);

  addNewConnectedUser({
    socketId: socket.id,
    userId: userDetails.userId,
  });

  // update pending friends invitations list
  friendsUpdate.updateFriendPendingInvitations(userDetails.userId);
  //update friends list
  friendsUpdate.updateFriends(userDetails.userId);
};

module.exports = newConnectionHandler;
