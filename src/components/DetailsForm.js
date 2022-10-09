import { set, ref as dref } from "firebase/database";
import { getDownloadURL, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { db, storage } from "../services/firebase";

const idPattern = /^[a-z_](?:[a-z0-9_])*$/g;

const DetailsForm = ({ user, setIsLoading, setAnyError, setPage }) => {
  const [photoUrl, setPhotoUrl] = useState("");
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setIsLoading(false);
    if (user === null || user.photoURL === null)
      getDownloadURL(ref(storage, "images/woman.png"))
        .then((url) => {
          setPhotoUrl(url);
        })
        .catch((err) => {
          console.log(err);
          setAnyError(true);
        });
  });

  const onSubmit = (data) => {
    set(dref(db, "users/" + user.uid), {
      email: user.email,
      userid: data.userid,
      photoUrl: user.photoURL,
    });
    setPage("final");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="align-items-center">
          <Col className="d-flex justify-content-center" sm={4}>
            <Image
              className="shadow-sm rounded-circle p-0"
              style={{
                width: "10em",
                height: "10em",
              }}
              src={user.photoURL ? user.photoURL : photoUrl}
              referrerPolicy="no-referrer"
            ></Image>
          </Col>
          <Col sm={6} className="d-flex flex-column justify-content-evenly">
            <Row>
              <Controller
                name="userid"
                defaultValue={user.email.split("@")[0]}
                control={control}
                rules={{
                  required: true,
                  minLength: 4,
                  maxLength: 16,
                  pattern: idPattern,
                }}
                render={({ field }) => {
                  return (
                    <Form.Group className="my-2" controlId="fuserid">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Create username"
                        {...field}
                      />
                      {errors.userid ? (
                        <Form.Text className="text-danger">
                          Username must start with a-z or _, contain only a-z,
                          0-9, _ and of length 4-16.
                        </Form.Text>
                      ) : (
                        <Form.Text className="text-muted">
                          This will be your unique user id.
                        </Form.Text>
                      )}
                    </Form.Group>
                  );
                }}
              />
            </Row>
            <Row>
              <Col>
                <Form.Group className="my-2" controlId="femail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder={user.email}
                    disabled
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Button variant="primary" className="my-2" type="submit">
            Update
          </Button>
        </Row>
      </Form>
    </Container>
  );
};

export default DetailsForm;
