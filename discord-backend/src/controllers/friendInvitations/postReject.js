const friendInvitation = require("../../models/friendInvitation");
const friends = require("../../../socketHandler/updates/friends");
const postReject = async (req, res) => {
  try {
    const { id } = req.body;
    const { userId } = req.user;
    console.log("**check RejectInviation", id, userId);

    // remove that invitations from friend invitations collections
    const invitationsExit = await friendInvitation.exists({ _id: id });

    if (invitationsExit) {
      await friendInvitation.findByIdAndDelete(id);
    }

    // update Pending Invitations
    friends.updateFriendPendingInvitations(userId);

    return res.status(200).send("Invitations successfully rejected!");
  } catch (error) {
    console.log(err);
    return res.status(500).send("Something went wrong please try again!");
  }
};

module.exports = postReject;
