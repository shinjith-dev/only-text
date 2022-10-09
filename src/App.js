import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import AuthUser from "./components/AuthUser";
import { auth } from "./services/firebase";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (auth.currentUser !== null) {
      setUser(auth.currentUser);
    }
  }, []);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    }
  });

  return (
    <Container
      fluid
      className="p-0"
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Navbar as="nav" bg="dark" expand="sm" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">0NLY T3XT</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto p-1 pt-2">
              <Nav.Item className="m-1">
                <div className="d-grid gap-2">
                  <Button variant="secondary">REGISTER</Button>
                </div>
              </Nav.Item>
              <Nav.Item className="m-1">
                <div className="d-grid gap-2">
                  <Button variant="secondary">SIGN IN</Button>
                </div>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid="md" className="py-3" as="main">
        {/* {authenticated ? (
          <Profile
            user={user}
            setAuthenticated={(val) => {
              setAuthenticated(val);
            }}
          />
        ) : ( */}
        <AuthUser user={user} setUser={(user) => setUser(user)} />
        {/* )} */}
      </Container>
    </Container>
  );
};

export default App;
