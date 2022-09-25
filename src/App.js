import { Box } from "@mui/material";
import Chat from "./components/Chat";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Chat />
    </Box>
  );
}

export default App;
