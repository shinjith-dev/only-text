import React from "react";
import DetailsForm from "./DetailsForm";
import ErrorPage from "./ErrorPage";
import SignUp from "./SignUp";

const RegisterTabChooser = ({
  tab = "signup",
  setPage,
  user,
  setIsLoading,
  setAnyError,
}) => {
  if (tab === "signup")
    return (
      <SignUp
        setPage={setPage}
        user={user}
        setAnyError={setAnyError}
        setIsLoading={setIsLoading}
      />
    );
  else if (tab === "details")
    return (
      <DetailsForm
        setPage={setPage}
        user={user}
        setIsLoading={setIsLoading}
        setAnyError={setAnyError}
      />
    );
  else return <ErrorPage />;
};

export default RegisterTabChooser;
