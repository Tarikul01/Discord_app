import React from "react";
import { styled } from "@mui/system";
import { connect } from "react-redux";
import MessagesHeader from "./MessagesHeader";
import dummy_messages from "./DUMMY_MESSAGES";
import Message from "./Message";
const MainContainer = styled("div")({
  height: "calc(100% - 60px)",
  width:"100%",
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Messages = ({ chosenChatDetails, messages }) => {
  return (
    <MainContainer>
      <MessagesHeader name={chosenChatDetails?.name} />
      {dummy_messages.map((message, index) => {
        return (
          <Message
            key={message._id}
            content={message.content}
            username={message.author.username}
            date={message.date}
            sameDay={message.sameDay}
            sameAuthor={message.sameAuthor}
          />
        ); 
      })}
    </MainContainer>
  );
};
const mapStoreStateToProps = ({ chat }) => {
  return {
    ...chat,
  };
};

export default connect(mapStoreStateToProps)(Messages);
