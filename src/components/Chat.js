import { Box } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import React, { useState } from "react";
import Conversation from "./Conversation";
import SendBox from "./SendBox";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      id: 0,
      sender: "You",
      message: "hello",
    },
    { id: 1, sender: "Person1", message: "Dude! whatsup??" },
  ]);

  const handleChatBoxClick = () => {
    document.getElementById("send-box").focus();
  };
  return (
    <Box
      onClick={handleChatBoxClick}
      sx={{
        backgroundColor: "#151515",
        boxShadow: 4,
        borderRadius: 3,
        width: "95%",
        height: "95%",
        color: blueGrey[100],
        p: "2rem",
      }}
    >
      <Conversation messages={messages} />
      <SendBox
        addYourMessage={(msg) =>
          setMessages(
            messages.concat({
              id: messages[messages.length - 1].id + 1,
              sender: "You",
              message: msg,
            })
          )
        }
      />
    </Box>
  );
};

export default Chat;
