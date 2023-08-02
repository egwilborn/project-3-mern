import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import userService from "../../utils/userService";
import "./SignupForm.css";

export default function SignupForm({ handleSignupOrLogin }) {
  const navigate = useNavigate();
  //SET STATE HERE
  //state is the state of the form entries
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    passwordConf: "",
  });
  //selected file is the state that contains the profile photos
  const [selectedFile, setSelectedFile] = useState();
  const [error, setError] = useState("");

  //DEFINE FUNCTIONS HERE
  //handles the rendering of the changes made to each form input
  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }
  //handles rendering of chosen file
  function handleSelectedFile(e) {
    setSelectedFile(e.target.files[0]);
  }
  //handles form submission
  async function handleSubmit(e) {
    e.preventDefault(); // prevents the page from refreshing
    const formData = new FormData();
    formData.append("photo", selectedFile);
    formData.append("username", state.username);
    formData.append("email", state.email);
    formData.append("password", state.password);
    try {
      const signup = await userService.signup(formData);
      navigate("/");
      handleSignupOrLogin();
    } catch (err) {
      console.log(err, "<-- error with signup - see signup form");
      setError("Unable to sign up. Please try again.");
    }
  }
  //RETURN UI HERE
  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header
          as="h2"
          style={{ color: "rgb(94 149 162)", height: "10vh" }}
          textAlign="center"
        >
          <Image src="https://imgur.com/RNaIGvo.png" className="signup-logo" />
          Sign Up to Use Travelog
        </Header>
        <Form size="large" autoComplete="off" onSubmit={handleSubmit}>
          <Segment stacked style={{ backgroundColor: "rgb(192 204 210)" }}>
            <Form.Input
              fluid
              placeholder="Username"
              name="username"
              value={state.username}
              onChange={handleChange}
              required
            />
            <Form.Input
              fluid
              placeholder="E-mail address"
              name="email"
              value={state.email}
              onChange={handleChange}
              required
            />
            <Form.Input
              fluid
              placeholder="Password"
              type="password"
              name="password"
              value={state.password}
              onChange={handleChange}
              required
            />
            {state.password !== state.passwordConf ? (
              <p style={{ color: "red", fontSize: "15px" }}>
                passwords do not match
              </p>
            ) : null}
            <Form.Input
              fluid
              placeholder="Confirm Password"
              type="password"
              name="passwordConf"
              value={state.passwordConf}
              onChange={handleChange}
              required
            />
            <Form.Input
              fluid
              placeholder="Upload Photo"
              type="file"
              name="photo"
              onChange={handleSelectedFile}
            />

            <Button
              style={{ backgroundColor: "rgb(19 52 119)", color: "white" }}
              fluid
              size="large"
              type="submit"
            >
              Sign Up
            </Button>
          </Segment>
        </Form>
        <Message style={{ backgroundColor: "rgb(94 149 162)", color: "white" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "rgb(192 204 210)" }}>
            Login
          </Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
}
