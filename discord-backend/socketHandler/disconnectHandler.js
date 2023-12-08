const { removeConnecteduser } = require("../serverStore");

const disconnectHandler = (socket) => {
  removeConnecteduser(socket.id);
};
module.exports = disconnectHandler;
