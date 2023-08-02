import { Header, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Segment style={{ height: "10vmin", backgroundColor: "rgb(94 149 162)" }}>
      <Link to="" style={{ color: "white" }}>
        Travelog
      </Link>
    </Segment>
  );
}
