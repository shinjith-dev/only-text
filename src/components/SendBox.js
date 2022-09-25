import { Typography } from "@mui/material";
import React, { useState } from "react";

const SendBox = ({ addYourMessage }) => {
  const [inputMsg, setInputMsg] = useState("");

  const handleMsgChange = (e) => {
    setInputMsg(e.target.value);
  };

  const handleMsgSubmit = (e) => {
    e.preventDefault();
    addYourMessage(inputMsg);
    setInputMsg("");
  };

  return (
    <form onSubmit={handleMsgSubmit}>
      <Typography variant="body1">
        You:{" "}
        <input
          value={inputMsg}
          onChange={handleMsgChange}
          type="text"
          id="send-box"
          autoFocus
        />
      </Typography>
    </form>
  );
};

export default SendBox;
