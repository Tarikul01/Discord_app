const friendInvitation = require("../../models/friendInvitation");
const User = require("../../models/user");
const friendsUpdate = require("../../../socketHandler/updates/friends");
const postInvitation = async (req, res) => {
  const { targetMailAddress } = req.body;

  const { userId, mail } = req.user;

  clearInterval;
  // check if friend that we would like to nivite is not user
  if (mail.toLowerCase() === targetMailAddress.toLowerCase()) {
    return res
      .status(409)
      .send("Sorry. You cannot become friend with yourself");
  }
  const targetUser = await User.findOne({
    mail: targetMailAddress.toLowerCase(),
  });
  console.log("TargetUser", targetUser);
  if (!targetUser) {
    return res
      .status(404)
      .send(
        `Friend of ${targetMailAddress} has not been found. Please check mail address`
      );
  }
  //   check if invitation already send or not
  const invitationAlreadyReceived = await friendInvitation.findOne({
    senderId: userId,
    receiverId: targetUser._id,
  });

  if (invitationAlreadyReceived) {
    return res.status(409).send("Invitation has been already sent");
  }

  // Check  the requested friend is already friend or not

  const userAlreadyFriends = targetUser.friends.find(
    (friendId) => friendId.toString() === userId.toString()
  );

  if (userAlreadyFriends) {
    return res
      .status(409)
      .send("Friends already added. Please check friends list");
  }
  //  Create a new Invitations in database

  const newInvitation = await friendInvitation.create({
    senderId: userId,
    receiverId: targetUser._id,
  });
  //   send pending invitations update to  specific user
  friendsUpdate.updateFriendPendingInvitations(targetUser._id.toString());

  return res.status(201).send("Invitation has been sent !");
};

module.exports = postInvitation;
