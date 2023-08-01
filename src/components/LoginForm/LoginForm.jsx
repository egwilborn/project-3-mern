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

export default function LoginForm({ handleSignupOrLogin }) {
  const navigate = useNavigate();
  //SET STATE HERE
  //state is the state of the form entries
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  //selected file is the state that contains the profile photos

  const [error, setError] = useState("");

  //DEFINE FUNCTIONS HERE
  //handles the rendering of the changes made to each form input
  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  //handles form submission
  async function handleSubmit(e) {
    e.preventDefault(); // prevents the page from refreshing
    try {
      const data = await userService.login(state);
      navigate("/");
      handleSignupOrLogin();
    } catch (err) {
      console.log(err, "<-- error in Login");
      setError("Error with Login, check console");
    }
  }
  //RETURN UI HERE
  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" style={{ color: "rgb(94 149 162)" }} textAlign="center">
          <Image src="https://imgur.com/RNaIGvo.png" className="signup-logo" />
          Login to Travelog
        </Header>
        <Form size="large" autoComplete="off" onSubmit={handleSubmit}>
          <Segment stacked style={{ backgroundColor: "rgb(192 204 210)" }}>
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

            <Button
              style={{ backgroundColor: "rgb(19 52 119)", color: "white" }}
              fluid
              size="large"
              type="submit"
            >
              Login
            </Button>
          </Segment>
        </Form>
        <Message style={{ backgroundColor: "rgb(94 149 162)", color: "white" }}>
          Don't have an account?{" "}
          <Link to="/signup" style={{ color: "rgb(192 204 210)" }}>
            Sign Up
          </Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
}
