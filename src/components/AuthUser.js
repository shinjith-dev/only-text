import {
  Alert,
  Box,
  Container,
  Link,
  Snackbar,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Copyright(props) {
  return (
    <Typography
      sx={{ mt: 4 }}
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        Only Text
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const AuthUser = ({setAuthenticated,setSnackbar}) => {
  const [tabValue, setTabValue] = useState("signin");
 

  const handleTabChange = () => {
    setTabValue(tabValue === "signin" ? "signup" : "signin");
  };

 

  const handleNewHereClick = () => {
    setTabValue("signup");
  };

  const handleAlreadyUser = () => {
    setTabValue("signin");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="SignIn or SignUp"
          centered
        >
          <Tab value="signin" label="Sign In" />
          <Tab value="signup" label="Sign Up" />
        </Tabs>
        {tabValue === "signin" ? (
          <SignIn setSnackbar={setSnackbar} newHere={handleNewHereClick} setAuthenticated={setAuthenticated}/>
        ) : (
          <SignUp setSnackbar={setSnackbar} alreadyUser={handleAlreadyUser} setAuthenticated={setAuthenticated}/>
        )}
      </Box>
      <Copyright />
      
    </Container>
  );
};

export default AuthUser;
