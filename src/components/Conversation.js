import { Box, Typography } from "@mui/material";
import React from "react";

const Conversation = ({ messages }) => {
  return (
    <Box>
      {messages.map((line) => (
        <Typography variant="body1">
          {line.sender} : {line.message}
        </Typography>
      ))}
    </Box>
  );
};

export default Conversation;
