import { Input, Button, Segment } from "semantic-ui-react";

export default function SearchCitiesForm() {
  return (
    <div className="search-cities">
      <p>Search for a City</p>
      <Input></Input>
      <Button> Search</Button>
    </div>
  );
}
