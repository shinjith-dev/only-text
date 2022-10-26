import { Box } from "@mui/material";
import React from "react";
import TermMainWindow from "./components/TermMainWindow";

const App = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
        <TermMainWindow />
      </Box>
    </Box>
  );
};

export default App;
