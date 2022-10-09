import React from "react";
import { Container } from "react-bootstrap";
import { TiTick } from "react-icons/ti";

const RegisterProgressBar = ({ progress = 0, max = 2, danger = true }) => {
  const dots = Array(progress + 1).fill(1);
  return (
    <Container fluid="sm">
      <div
        className="w-100 rounded mt-2 mb-4"
        style={{ backgroundColor: "#e9ecef", height: "0.3em" }}
      >
        <div
          className={`bg-${
            danger ? "danger" : "success"
          } rounded position-relative`}
          style={{ height: "0.3em", width: `${(progress / max) * 100}%` }}
        >
          {dots.map((dot, index) => {
            return (
              <span
                key={`pdot-${index}`}
                className={`bg-light border border-2 border-${
                  danger ? "danger" : "success"
                } text-${
                  danger ? "danger" : "success"
                } rounded-circle position-absolute`}
                style={{
                  height: "1em",
                  width: "1em",
                  transform: "translate(-0.5em,-0.4em)",
                  left: `${((progress - index) / progress) * 100}%`,
                }}
              >
                <TiTick
                  className="position-absolute"
                  style={{
                    transform: "translate(-0.15em,-0.15em)",
                    padding: "0.1em",
                  }}
                />
              </span>
            );
          })}
          <span
            className={`bg-light border border-2 border-${
              danger ? "danger" : "success"
            } rounded-circle position-absolute`}
            style={{
              height: "1em",
              width: "1em",
              transform: "translate(-0.5em,-0.4em)",
              left: "100%",
            }}
          >
            <span
              className={`position-absolute bg-${
                danger ? "danger" : "success"
              } rounded-circle m-0`}
              style={{
                transform: "translate(0.13em,0.12em)",
                height: "0.5em",
                width: "0.5em",
              }}
            ></span>
          </span>
        </div>
      </div>
    </Container>
  );
};

export default RegisterProgressBar;
