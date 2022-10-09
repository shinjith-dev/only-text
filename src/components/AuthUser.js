import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import RegisterProgressBar from "./RegisterProgressBar";
import RegisterTabChooser from "./RegisterTabChooser";

const AuthUser = ({ user, setUser }) => {
  const [current, setCurrent] = useState("signup");
  const [isLoading, setIsLoading] = useState(true);
  const [anyError, setAnyError] = useState(false);

  useEffect(() => {
    if (user !== null) setCurrent("details");
    else setIsLoading(false);
  }, [user]);

  const getprogress = () => {
    if (current === "signup") return 0;
    else if (current === "details") return 1;
    else return 0;
  };

  const loading = () => {
    return (
      <>
        <Container
          fluid
          className="position-absolute w-100 h-100 top-0 start-0 end-0 align-items-center bg-dark opacity-25"
        ></Container>
        <Spinner
          className="top-50 start-50 position-absolute"
          animation="border"
          style={{
            zIndex: 2,
          }}
        />
      </>
    );
  };

  return (
    <Container
      fluid="sm"
      className="bg-light m-2 py-3 px-2 mx-auto position-relative"
      style={{
        maxWidth: "55em",
      }}
    >
      <RegisterProgressBar progress={getprogress()} danger={anyError} />
      <RegisterTabChooser
        tab={current}
        setPage={(page) => {
          setCurrent(page);
        }}
        user={user}
        setIsLoading={(loading) => setIsLoading(loading)}
        setAnyError={(error) => setAnyError(error)}
      />
      {isLoading && loading()}
    </Container>
  );
};

export default AuthUser;
