import { Header, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Footer({ isLoggedOut }) {
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
      {isLoggedOut ? null : (
        <div
          style={{
            width: "100vw",
            display: "flex",
            justifyContent: "space-evenly",
            alignContent: "center",
          }}
        >
          <Link to="/" style={{ color: "white", fontSize: "20px" }}>
            Travelog
          </Link>
          <br />
          <Link to="/form" style={{ color: "white", fontSize: "20px" }}>
            Add a City
          </Link>
        </div>
      )}
    </Segment>
  );
}
