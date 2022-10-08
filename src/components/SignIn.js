import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/Firebase";
import { red } from "@mui/material/colors";

const emailPattern =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const SignIn = ({ setSnackbar, newHere, setAuthenticated }) => {
  const [validEmail, setValidEmail] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fdata = new FormData(e.currentTarget);
    if (emailPattern.test(fdata.get("email"))) {
      setValidEmail(true);
      signInWithEmailAndPassword(
        auth,
        fdata.get("email"),
        fdata.get("password")
      )
        .then((userInfo) => {
          setSnackbar({
            open: true,
            message: `Signed in as ${userInfo.user.email}`,
            severity: "success",
          });
          e.target.reset();
          setAuthenticated(true)
        })
        .catch((err) => {
          setSnackbar({
            open: true,
            message: `Failed to sign in. Try again`,
            severity: "error",
          });
          e.target.reset();
        });
    } else setValidEmail(false);
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: 3,
        }}
      >
        <Typography component="h1" variant="h5">
          SIGN IN
        </Typography>
        <Box
          component="form"
          method="POST"
          onSubmit={handleSubmit}
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Your Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          {!validEmail && (
            <Typography
              sx={{ color: red[500], mx: 1 }}
              component="p"
              variant="body2"
            >
              Enter a valid email address
            </Typography>
          )}
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Your Password"
            name="password"
            type="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#signup" variant="body2" onClick={newHere}>
                New here? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
