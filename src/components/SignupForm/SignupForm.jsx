import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Icon,
} from "semantic-ui-react";

export default function SignupForm() {
  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" style={{ color: "rgb(94 149 162)" }} textAlign="center">
          <Image src="https://imgur.com/RNaIGvo.png" /> Sign Up to Use
          TravelShare
        </Header>
        <Form size="large">
          <Segment stacked style={{ backgroundColor: "rgb(192 204 210)" }}>
            <Form.Input fluid placeholder="E-mail address" />
            <Form.Input fluid placeholder="Password" type="password" />

            <Button
              style={{ backgroundColor: "rgb(19 52 119)", color: "white" }}
              fluid
              size="large"
            >
              Login
            </Button>
          </Segment>
        </Form>
        <Message style={{ backgroundColor: "rgb(94 149 162)", color: "white" }}>
          Already have an account? Login
        </Message>
      </Grid.Column>
    </Grid>
  );
}
