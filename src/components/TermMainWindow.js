import { Box, Container } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import Console from "./Console";

const TermMainWindow = () => {
  const handleConsoleClick = () => {
    document.getElementById("term-textfield").focus();
  };
  return (
    <Container
      maxWidth="sm"
      sx={{
        height: "80vh",
        px: "0.5em",
        maxHeight: "45em",
      }}
    >
      <Box
        id="console-cont"
        sx={{
          backgroundColor: grey[900],
          height: "100%",
          overflowY: "hidden",
          borderRadius: "10px",
        }}
      >
        <Container
          sx={{
            backgroundColor: "primary.light",
            height: "2.7em",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
          }}
        ></Container>
        <div
          onClick={handleConsoleClick}
          style={{ height: "100%", width: "100%" }}
        >
          <Container
            sx={{
              height: "100%",
              overflowY: "scroll",
              py: 2,
            }}
          >
            <Console />
          </Container>
        </div>
      </Box>
    </Container>
  );
};

export default TermMainWindow;
