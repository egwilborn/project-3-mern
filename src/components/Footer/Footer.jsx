import { Header, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Segment
      style={{
        height: "10vmin",
        backgroundColor: "rgb(94 149 162)",
        display: "flex",
        justifyContent: "space-evenly",
        alignContent: "center",
      }}
    >
      <Link to="/" style={{ color: "white" }}>
        Travelog
      </Link>
      <br />
      <Link to="/form" style={{ color: "white" }}>
        Add a City
      </Link>
    </Segment>
  );
}
