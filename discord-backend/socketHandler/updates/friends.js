const User=require("../../src/models/user");
const FriendInvitation=require("../../src/models/friendInvitation");
const serverStore=require("../../serverStore");




const updateFriendPendingInvitations=async ()=>{
    try {

        const pendingInvitations=await FriendInvitation.find({
            receiverId:userId  
        }).populate('senderId', '_id username mail');

        // find if user of specified userId has active connections
        
        
    } catch (error) {
        console.log(error)
    }
}