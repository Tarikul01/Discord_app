let conectedUsers = new Map();

const addNewConnectedUser = ({ socketId, userId }) => {
  conectedUsers.set(socketId, { userId });

  console.log("NewConnected users", conectedUsers);
};
const removeConnecteduser = (socektId) => {
  if (conectedUsers.has(socektId)) {
    conectedUsers.delete(socektId);
    console.log("Disconnect user");
    console.log(conectedUsers);
  }
};

module.exports = {
  addNewConnectedUser,
  removeConnecteduser,
};
