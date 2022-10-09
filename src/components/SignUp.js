import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { ref, set } from "firebase/database";
import React from "react";
import { Container } from "react-bootstrap";
import { BsGoogle } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { auth, db } from "../services/firebase";

const SignUp = ({ setPage, user, setAnyError }) => {
  const handleGoogleSignUp = () => {
    const providerG = new GoogleAuthProvider();
    signInWithPopup(auth, providerG)
      .then((result) => {
        const user = result.user;
        set(ref(db, "users/" + user.uid), { email: user.email });
        setPage("details");
      })
      .catch((err) => {
        console.log(err);
        setAnyError(true);
      });
  };

  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center p-2 text-center"
    >
      <h4 className="mb-0">Sign up using</h4>
      <hr className="w-50 mx-auto" />
      <Container className="d-flex justify-content-center">
        <span onClick={handleGoogleSignUp}>
          <span
            className="rounded-circle shadow-sm bg-white d-flex align-items-center justify-content-center mx-3 mb-1"
            style={{ width: "2.5em", height: "2.5em" }}
          >
            <BsGoogle style={{ width: "1.2em", height: "1.2em" }} />
          </span>
          Google
        </span>
        <span>
          <span
            className="rounded-circle shadow-sm bg-white d-flex align-items-center justify-content-center mx-3 mb-1"
            style={{ width: "2.5em", height: "2.5em" }}
          >
            <ImFacebook style={{ width: "1.3em", height: "1.3em" }} />
          </span>
          Facebook
        </span>
      </Container>
    </Container>
  );
};

export default SignUp;
