const Conversation = require("../src/models/conversation");
const Message = require("../src/models/message");
const {updateChatHistory} = require("./updates/chat");
const directMessageHandler = async (socket, data) => {
  try {
    console.log("direct message event is being handled ");
    const { userId } = socket.user;
    const { receiverUserId, content } = data;

    // create new message
    const message = await Message.create({
      content: content,
      author: userId,
      date: new Date(),
      type: "DIRECT",
    });
    //find if conversation exit  with this two users - if not create new
    const conversation = await Conversation.findOne({
      participants: { $all: [userId, receiverUserId] },
    });

    if (conversation) {
      conversation.messages.push(message._id);
      await conversation.save();

      //performed and update to sender and receiver if is online
      updateChatHistory(conversation._id.toString());
    } else {
      //create new conversation if not exits
      const newConversation = await Conversation.create({
        messages: [message._id],
        participants: [userId, receiverUserId],
      });
      //perform and udpate to sender and receiver if is online

      updateChatHistory(conversation._id.toString());
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = directMessageHandler;
