import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { red } from "@mui/material/colors";
import { auth } from "../services/Firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const emailPattern =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const idPattern = /^[a-z_](?:[a-z0-9_])*$/g;

const SignUp = ({ setSnackbar, alreadyUser, setAuthenticated }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [mismatch, setMismatch] = useState(false);

  const onSubmit = (data) => {
    if (data.password !== data.repassword) setMismatch(true);
    else {
      setMismatch(false);
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userInfo) => {
          const user = userInfo.user;
          setSnackbar({
            open: true,
            message: `New user created: ${user.email}`,
            severity: "success",
          });
          updateProfile(auth.currentUser,{
            displayName:data.name
          })
          setAuthenticated(true)
        })
        .catch(() => {
          setSnackbar({
            open: true,
            message: `Failed to create new user. Try again`,
            severity: "error",
          });
        });
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          pt: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          SIGN UP
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3 }}
          noValidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="name"
                required
                fullWidth
                id="name"
                label="Full name"
                autoFocus
                {...register("name", {
                  required: true,
                  minLength: 2,
                  maxLength: 15,
                })}
              />
              {errors.name && (
                <Typography
                  sx={{ color: red[500], mx: 1 }}
                  component="p"
                  variant="body2"
                >
                  Full name is restricted to a length range 2-15
                </Typography>
              )}
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                {...register("email", {
                  required: true,
                  pattern: emailPattern,
                })}
              />
              {errors.email && (
                <Typography
                  sx={{ color: red[500], mx: 1 }}
                  component="p"
                  variant="body2"
                >
                  Enter a valid email address
                </Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="userid"
                label="New user ID"
                name="userid"
                {...register("userid", {
                  required: true,
                  minLength: 4,
                  maxLength: 16,
                  pattern: idPattern,
                })}
              />
              {errors.userid && (
                <Typography
                  sx={{ color: red[500], mx: 1 }}
                  component="p"
                  variant="body2"
                >
                  User id must start with a-z or _, contain only a-z,0-9 and _
                  and of length 4-16
                </Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="New password"
                type="password"
                id="password"
                autoComplete="new-password"
                {...register("password", {
                  required: true,
                  minLength: 8,
                  maxLength: 16,
                })}
              />
              {errors.password && (
                <Typography
                  sx={{ color: red[500], mx: 1 }}
                  component="p"
                  variant="body2"
                >
                  Use a strong password of length 8-16
                </Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="repassword"
                label="Confirm new password"
                type="password"
                id="repassword"
                autoComplete="new-password"
                {...register("repassword", {
                  required: true,
                  minLength: 8,
                  maxLength: 16,
                })}
              />
              {errors.repassword && (
                <Typography
                  sx={{ color: red[500], mx: 1 }}
                  component="p"
                  variant="body2"
                >
                  Use a strong password of length 8-16
                </Typography>
              )}
              {mismatch && (
                <Typography
                  sx={{ color: red[500], mx: 1 }}
                  component="p"
                  variant="body2"
                >
                  Passwords do not match
                </Typography>
              )}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#signin" variant="body2" onClick={alreadyUser}>
                Already a user? Sign In
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
