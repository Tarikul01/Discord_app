import React from "react";
import { styled } from "@mui/system";
import { connect } from "react-redux";
import MessagesHeader from "./MessagesHeader";
import dummy_messages from "./DUMMY_MESSAGES";
import Message from "./Message";
const MainContainer = styled("div")({
  height: "calc(100% - 60px)",
  width: "100%",
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Messages = ({ chosenChatDetails, messages }) => {
  const convertDateToHumanReadable = (date, format) => {
    
    const map = {
        mm: ('0' + (date.getMonth() + 1)).slice(-2),
        dd: ('0' + date.getDate()).slice(-2),
        yy: date.getFullYear().toString().slice(-2),
        yyyy: date.getFullYear(),
    };
    
    return format.replace(/mm|dd|yy|yyyy/gi, (matched) => map[matched]);
};
  return (
    <MainContainer>
      <MessagesHeader name={chosenChatDetails?.name} />
      {messages.map((message, index) => {
        const sameAuthor =
          index > 0 &&
          message[index]?.author?._id === message[index - 1]?.author?._id;

        const sameDay =
          index > 0 &&
          convertDateToHumanReadable(new Date(message?.date), "dd/mm/yy") ===
            convertDateToHumanReadable(
              new Date(messages[index - 1]?.date),
              "dd/mm/yy"
            );
  
        return (
          <Message
            key={message._id}
            content={message.content}
            username={message?.author?.username}
            date={convertDateToHumanReadable(
              new Date(message.date),
              "dd/mm/yy"
            )}
            sameDay={sameDay}
            sameAuthor={sameAuthor}
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
