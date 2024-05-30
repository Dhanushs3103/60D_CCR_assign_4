// Packages
import React from "react";
import { Container, Input, Button, useToast } from "@chakra-ui/react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// local imports
import LoadingIndicator from "../Components/LoadingIndicator"; // import LoadingIndicator.jsx
import ErrorIndicator from "../Components/ErrorIndicator"; // import ErrorIndicator.jsx
import { AuthContext } from "../Components/AuthContextProvider";
import axios from "axios";

// function to handle login
export default function Login() {
  let [loading, setLoading] = useState(false); // state for loading ticket.status.
  let [error, setError] = useState(false); // state for error ticket.status.
  let navigate = useNavigate(); // invocking the useNavigate hook for the purpose of navigation.
  let toast = useToast(); // invocking the useToast hook from chakra ui.
  let { login } = useContext(AuthContext); // destructuring the AuthContext values form AuthContext.
  let [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  function handleInputChange(e) {
    let { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    if (formState.email === "" && formState.password === "") {
      return toast({
        title: `Enter the login credentials`,
        status: "warning",
        isClosable: true,
        duration: 2000,
      });
    } else {
      try {
        setLoading(false);
        let auth = await axios({
          method: "post",
          url: `https://reqres.in/api/login`,
          data: formState,
        });
        if (auth.status === 200) { // cheaking login status
          formState.email = "";
          formState.password = "";
          login()// setting login state to true
          toast({
            title: `Login successfull`,
            status: "success",
            isClosable: true,
            duration: 2000,
          });
          navigate(`/`)
        } else {
          toast({
            title: `Login failed`,
            status: "error",
            isClosable: true,
            duration: 2000,
          });
        }
      } catch (error) {
        formState.email = "";
        formState.password = "";
        toast({
          title: `Login failed`,
          status: "error",
          isClosable: true,
          duration: 2000,
        });
        setError(true);
        setLoading(false);
      }
    }
  }

  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "30px", paddingTop: "20px" }}>
        Login Page
      </h1>
      {/* Login section */}
      <Container
        borderRadius={10}
        marginBottom={7}
        boxShadow={
          "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"
        }
        padding={5}
        marginTop={2}
        width={"450px"}
      >
        {/* form section */}
        <form onSubmit={handleSubmit}>
          {/*Email section*/}
          <label
            htmlFor="email"
            style={{ fontSize: "20px", fontWeight: "500" }}
          >
            Enter the Email <span style={{ color: "red" }}>*</span>
            <Input
              id="email"
              placeholder="Enter the email"
              size="lg"
              marginTop={1}
              marginBottom={2}
              name="email"
              type="email"
              value={formState.email}
              onChange={handleInputChange}
            />
          </label>
          {/*Password section*/}
          <label
            htmlFor="password"
            style={{ fontSize: "20px", fontWeight: "500" }}
          >
            Enter the Password <span style={{ color: "red" }}>*</span>
            <Input
              id="password"
              placeholder="Enter the password"
              size="lg"
              marginTop={1}
              marginBottom={2}
              name="password"
              type="password"
              value={formState.password}
              onChange={handleInputChange}
            />
          </label>
          {/* Submit button */}
          <Button
            colorScheme="green"
            variant="solid"
            fontSize={"20px"}
            marginTop={4}
            padding={"25px 173px"}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Container>
    </>
  );
}
