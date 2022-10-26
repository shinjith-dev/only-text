import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import TextEntry from "./TextEntry";

const Console = () => {
  const [lines, setLines] = useState([
    "Welcome to only-text v1.0",
    "Try the help command",
  ]);

  useEffect(() => {
    const consolec = document.getElementById("console-cont");
    consolec.scrollTop = consolec.scrollHeight;
    console.log(console.scrollTop);
  });

  const appendLine = (text) => {
    setLines((line) => line.concat(text));
  };

  const clearLines = () => {
    setLines([]);
  };

  return (
    <>
      <Box sx={{ color: "lightgray", p: 0 }}>
        {lines.length > 0 &&
          lines.map((line, index) => (
            <Typography
              component="div"
              key={`cons-line${index}`}
              variant="body2"
              sx={{ wordWrap: "break-word", overflow: "hidden", width: "100%" }}
            >
              <pre>{line}</pre>
            </Typography>
          ))}

        <TextEntry
          appendLine={(line) => appendLine(line)}
          clearLines={clearLines}
        />
      </Box>
    </>
  );
};

export default Console;
