import { Card, Form, Button } from "semantic-ui-react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import * as siteApi from "../../utils/siteApi";

export default function AddSiteForm({ handleAddSite }) {
  //define variables here
  const { cityId } = useParams();
  const navigate = useNavigate();
  //SET STATE HERE
  const [state, setState] = useState({
    name: "",
    description: "",
  });
  const [selectedFile, setSelectedFile] = useState();

  //DEFINE FUNCTIONS HERE
  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }
  function handleSelectFile(e) {
    setSelectedFile(e.target.files[0]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", selectedFile);
    formData.append("name", state.name);
    formData.append("description", state.description);
    //when you make the api call, the addSite function needs the form data
    //AND the CityId
    handleAddSite(formData, cityId);
    setState({
      name: "",
      description: "",
    });
    setSelectedFile({});
  }
  //RETURN UI HERE
  return (
    <>
      <Card.Content>
        <Card.Header style={{ fontSize: "20px" }}>Add a Site</Card.Header>
        <Card.Meta style={{ fontSize: "15px" }}>
          <span className="date">
            Submit this form to add a site you've visited in this city
          </span>
        </Card.Meta>
        <Form onSubmit={handleSubmit}>
          <Form.Input
            fluid={true}
            placeholder="Site Name"
            name="name"
            value={state.name}
            required
            onChange={handleChange}
          />
          <Form.TextArea
            fluid={true}
            rows={6}
            placeholder="Site Description"
            name="description"
            value={state.description}
            required
            onChange={handleChange}
          />
          <Form.Input
            type="file"
            fluid={true}
            placeholder="upload photo"
            name="photo"
            onChange={handleSelectFile}
          />
          <Button fluid={true} type="submit">
            Submit
          </Button>
        </Form>
      </Card.Content>
    </>
  );
}
