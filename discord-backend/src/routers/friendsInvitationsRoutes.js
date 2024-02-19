const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const joi = require("joi");
const friendInvitationControllers = require("../controllers/friendInvitations/friendInvitationController");
const validator = require("express-joi-validation").createValidator({});

const postFriendInvitationsSchema = joi.object({
  targetMailAddress: joi.string().email(),
});

const inviteSchema = joi.object({
  id: joi.string().required(),
});

router.post(
  "/invite",
  auth,
  validator.body(postFriendInvitationsSchema),
  friendInvitationControllers.controllers.postInvitation
);

router.post(
  "/accept",
  auth,
  validator.body(inviteSchema),
  friendInvitationControllers.controllers.postAccept
);
router.post(
  "/reject",
  auth,
  validator.body(inviteSchema),
  friendInvitationControllers.controllers.postReject
);

// Wrong Router url
router.get("*", (req, res) => {
  res.status(404).json({ msg: "URL doen't match! " });
});

module.exports = router;
