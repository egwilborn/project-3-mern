import {
  Grid,
  Header,
  Form,
  Segment,
  Button,
  Message,
  Image,
} from "semantic-ui-react";
import * as cityApi from "../../utils/cityApi";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddCityForm() {
  const navigate = useNavigate();
  //SET STATE HERE
  const [state, setState] = useState({
    name: "",
    country: "",
    description: "",
  });

  const [selectedFile, setSelectedFile] = useState();
  //DEFINE FUNCIONS HERE
  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  function handleSelectedFile(e) {
    setSelectedFile(e.target.files[0]);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", selectedFile);
    formData.append("name", state.name);
    formData.append("country", state.country);
    formData.append("description", state.description);
    cityApi.addCity(formData);
    navigate("/");
  }

  //RETURN UI HERE
  return (
    <Grid textAlign="center" style={{ width: "40vmin" }}>
      <Grid.Column>
        <Header
          as="h2"
          style={{
            color: "rgb(94 149 162)",
            height: "10vh",
            backgroundColor: "rgb(19 52 119)",
            border: "0",
          }}
          textAlign="center"
          attached="top"
        >
          Add a New City
        </Header>
        <Form onSubmit={handleSubmit} size="large" autoComplete="off">
          <Segment stacked style={{ backgroundColor: "rgb(192 204 210)" }}>
            <Form.Input
              fluid
              placeholder="City Name"
              name="name"
              value={state.name}
              onChange={handleChange}
              required
            />
            <Form.Input
              fluid
              placeholder="Country"
              name="country"
              value={state.country}
              onChange={handleChange}
              required
            />
            <Form.TextArea
              fluid
              rows="5"
              placeholder="Description"
              name="description"
              value={state.description}
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
              Submit
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
}
