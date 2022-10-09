import React from "react";
import { Container } from "react-bootstrap";
import { AiOutlineWarning } from "react-icons/ai";

const ErrorPage = () => {
  return (
    <Container>
      <span className="ratio ratio-1x1 text-dark" style={{ width: "50%" }}>
        <AiOutlineWarning />
      </span>
      <h3 className="text-center">
        We sincerely apologise for this unexpected behaviour.
      </h3>
    </Container>
  );
};

export default ErrorPage;
