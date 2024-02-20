const Conversation = require("../src/models/conversation");
const Message=require("../src/models/message")
const directMessageHandler=async (socket,data)=>{
    try {

        console.log("direct message event is being handled ")
        const {userId}=socket.user;
        const {receiverUserId,content}=data

        // create new message 
        const message=await Message.create({
            content:content,
            authorId:userId,
            date:new Date(),
            type:"DIRECT",
        })
        //find if conversation exit  with this two users - if not create new
        const conversation=await Conversation.findOne({
            participate:{$all:[userId,receiverUserId]},
        })

        if(conversation){
            conversation.messages.push(message._id);
            await  conversation.save();

            //performed and update to sender and receiver if is online
        }else{
            //create new conversation if not exits
            const newConversation=await Conversation.create({
                messages:[message._id],
                participate:[userId,receiverUserId]
            })
            //perform and udpate to sender and receiver if is online

        }


        
    } catch (error) {
        console.log(err)
        
    }

}

module.exports=directMessageHandler;