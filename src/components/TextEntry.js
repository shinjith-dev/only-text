import { Typography } from "@mui/material";
import React, { useState } from "react";
import commands from "../config/commands";
import config from "../config/config";

const TextEntry = ({ appendLine, clearLines }) => {
  const [inputVal, setInputval] = useState("");

  const onInputChange = (e) => {
    setInputval(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputVal === "clear") clearLines();
    else {
      if (commands.hasOwnProperty(inputVal)) {
        commands[inputVal]()
          .then((val) => {
            appendLine(`${config.prefix} ${inputVal}`);
            appendLine(val);
            appendLine("\n");
          })
          .catch((err) => {
            appendLine(`${config.prefix} ${inputVal}`);
            appendLine(`Error: Failed to execute ${inputVal}`);
            appendLine("\n");
          });
      } else {
        appendLine(`${config.prefix} ${inputVal}`);
        appendLine("Error: command not found\nTry using help command");
        appendLine("\n");
      }
    }
    setInputval("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Typography component="p" variant="body1">
        {config.prefix + " "}
        <input
          value={inputVal}
          onChange={onInputChange}
          id="term-textfield"
          autoComplete="off"
          autoFocus
          style={{ width: "95%" }}
        />
      </Typography>
    </form>
  );
};

export default TextEntry;
