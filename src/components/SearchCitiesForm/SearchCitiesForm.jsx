import { Input, Button, Segment, Form } from "semantic-ui-react";
import { useState } from "react";
import "./SearchCitiesForm.css";
export default function SearchCitiesForm({ searchCities }) {
  //SET STATE HERE
  const [state, setState] = useState({ search: "" });
  //DEFINE FUNCTIONS HERE
  function handleChange(e) {
    setState({
      search: e.target.value,
    });
  }

  function handleSearch(e) {
    e.preventDefault();
    const form = state.search.replace(/ /g, "+");
    searchCities(form);
  }
  //RETURN UI HERE
  return (
    <div className="search-cities">
      <p style={{ color: "white", fontSize: "15px" }}>Search for a City</p>
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
