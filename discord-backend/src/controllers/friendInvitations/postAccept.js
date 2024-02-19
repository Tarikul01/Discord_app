const friendInvitation = require("../../models/friendInvitation");
const User = require("../../models/user");
const friendUpdate=require("../../../socketHandler/updates/friends")

const postAccept = async (req, res) => {
  try {
   const {id}=req.body;
   const invitation=await friendInvitation.findById(id)
   if(!invitation){
    return res.status(401).send("Error occured. Please try again");

   }
   const {senderId,receiverId}=invitation;
   //add friend to both users
   const sendUser=await User.findById(senderId);
   sendUser.friends=[...sendUser.friends,receiverId];

   const receiveUser=await User.findById(receiverId);
   receiveUser.friends=[...receiveUser.friends,senderId];

   await sendUser.save();
   await receiveUser.save();

  //  delete Invitations 
  await friendInvitation.findByIdAndDelete(id);

   //update list of the friends if the users are online
   friendUpdate.updateFriends(senderId.toString());
   friendUpdate.updateFriends(receiverId.toString());

  //  update list of friends pending invitaitons 
  friendUpdate.updateFriendPendingInvitations(receiverId.toString());
  
  

  return res.status(200).send("Friends successfully added");
    



  } catch (error) {
    console.log(error)
    return res.status(500).send("Something went wrong, Please try again");

    
  }
};

module.exports = postAccept;
