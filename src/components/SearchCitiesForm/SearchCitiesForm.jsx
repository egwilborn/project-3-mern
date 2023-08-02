import { Input, Button, Segment } from "semantic-ui-react";

import "./SearchCitiesForm.css";
export default function SearchCitiesForm() {
  return (
    <div className="search-cities">
      <p style={{ color: "white" }}>Search for a City</p>
      <Input className="search-cities-input"></Input>
      <Button> Search</Button>
    </div>
  );
}
