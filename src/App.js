import { Alert, Box, CssBaseline, Snackbar } from "@mui/material";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import AuthUser from "./components/AuthUser";
import Profile from "./components/Profile";
import { auth } from "./services/Firebase";
// import Chat from "./components/Chat";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    if (auth.currentUser !== null) {
      setUser(auth.currentUser);
      setAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setAuthenticated(true);
      }
    });
  }, [authenticated]);

  console.log(user);
  const handleSnackClose = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

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
      <CssBaseline />
      {authenticated ? (
        <Profile user={user} setAuthenticated={val=>{setAuthenticated(val)}}/>
      ) : (
        <AuthUser setAuthenticated={setAuthenticated} setSnackbar={setSnackbar}/>
      )}
      {/* <Chat /> */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleSnackClose}
      >
        <Alert
          onClose={handleSnackClose}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default App;
