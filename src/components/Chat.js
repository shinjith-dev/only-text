import { Box } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { onChildAdded, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { sendMsg, db } from "../services/Firebase";
import Conversation from "./Conversation";
import SendBox from "./SendBox";

const Chat = () => {
  const [dir, setDir] = useState();
  const [messages, setMessages] = useState([
    {
      id: 0,
      sender: "You",
      message: "hello",
    },
    { id: 1, sender: "Person1", message: "Dude! whatsup??" },
  ]);

  const chatRef = ref(db, `chats/${dir}`);

  useEffect(() => {
    onChildAdded(chatRef, (data) => {
      if (
        !messages.find(
          (message) => JSON.stringify(message) === JSON.stringify(data.val())
        )
      )
        setMessages(messages.concat(data.val()));
      console.log(data.val());
    });
  });

  useState(() => {
    const sender = "abhi",
      receiver = "raju";
    let first, second;
    if (sender.localeCompare(receiver) < 0) {
      first = sender;
      second = receiver;
    }
    setDir(`${first}_${second}`);
  }, []);

  const handleChatBoxClick = () => {
    document.getElementById("send-box").focus();
  };

  const addYourMsg = (msg) => {
    const newObj = {
      id: messages[messages.length - 1].id + 1,
      sender: "You",
      message: msg,
    };
    sendMsg(newObj, dir);
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
      <SendBox addYourMsg={(msg) => addYourMsg(msg)} />
    </Box>
  );
};

export default Chat;
