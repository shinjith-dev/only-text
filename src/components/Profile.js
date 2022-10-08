import { Box, Button } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { auth } from "../services/Firebase";

const Profile = ({ user,setAuthenticated }) => {
const handleSignOut = ()=>{
    auth.signOut().then(()=>setAuthenticated(false));
}
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {user.email}
        {user.displayName && <p>{user.displayName}</p> }
        <Button variant="contained" onClick={handleSignOut}>SIGN OUT</Button>
      </Box>
    </Container>
  );
};

export default Profile;
