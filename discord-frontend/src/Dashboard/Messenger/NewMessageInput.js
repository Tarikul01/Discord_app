import React, { useState } from "react";
import { styled } from "@mui/system";
import { connect } from "react-redux";
import { sendDirectMessage } from "../../realtimeCommunication/socketConnection";
const MainContainer = styled("div")({
  height: "60px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  bottom: "0",
});

const Input = styled("input")({
  backgroundColor: "#2f3136",
  width: "98%",
  height: "44px",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "14px",
  padding: "0 10px",
});
const NewMessageInput = ({ chosenChatDetails }) => {
  const [message, setMessage] = useState("");
  const handleMessageValueChange = (e) => {
    setMessage(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };
  const handleSendMessage = () => {
    console.log("new Messages");
    if (message.length > 0) {
      sendDirectMessage({
        receiverUserId: chosenChatDetails.id,
        content: message,
      });
      setMessage("");
    }
  };
  return (
    <MainContainer>
      <Input
        placeholder={`Write message to ${chosenChatDetails?.name}`}
        value={message}
        onChange={handleMessageValueChange}
        onKeyDown={handleKeyPress}
      />
    </MainContainer>
  );
};
const mapStoreStateToProps = ({ chat }) => {
  return {
    ...chat,
  };
};

export default connect(mapStoreStateToProps)(NewMessageInput);
