let conectedUsers = new Map();

let io=null;

 const setSocketServerInstance=(ioInstance)=>{
  io=ioInstance;
 }
 const getSocketServerInstance=()=>{
  return io;
 }

const addNewConnectedUser = ({ socketId, userId }) => {
  conectedUsers.set(socketId, { userId });

  console.log("NewConnected users", conectedUsers);
};
const removeConnecteduser = (socketId) => {
  if (conectedUsers.has(socketId)) {
    conectedUsers.delete(socketId);
    console.log("Disconnect user");
    console.log(conectedUsers);
  }
};

const getActiveConnections=(userId)=>{
  const activeConnections=[]
  conectedUsers.forEach((value,key)=>{
     if(value.userId===userId){
      activeConnections.push(key);
     }
  })

  return activeConnections;
}

const getOnlineUsers=()=>{
  const onlineUsers=[];
  conectedUsers.forEach((value,key)=>{
    onlineUsers.push({socketId:key,userId:value.userId})
  })
  return onlineUsers;
}
 
module.exports = {
  addNewConnectedUser,
  removeConnecteduser,
  getActiveConnections,
  setSocketServerInstance,
  getSocketServerInstance,
  getOnlineUsers 
};
