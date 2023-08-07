import { Input, Button, Segment, Form } from "semantic-ui-react";
import { useState } from "react";
import "./SearchCitiesForm.css";
export default function SearchCitiesForm() {
  //SET STATE HERE
  const [state, setState] = useState("");
  //DEFINE FUNCTIONS HERE
  function handleChange(e) {
    setState(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
  }
  //RETURN UI HERE
  return (
    <div className="search-cities">
      <p style={{ color: "white" }}>Search for a City</p>
      <Form onSubmit={handleSearch}>
        <Input
          placeholder="City Name"
          className="search-cities-input"
          onChange={handleChange}
        ></Input>
        <Button type="submit"> Search</Button>
      </Form>
    </div>
  );
}
