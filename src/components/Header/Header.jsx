import { Header, Image, Icon } from "semantic-ui-react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function PageHeader({ handleLogout, needLogout }) {
  return (
    <Header
      style={{
        backgroundColor: "rgb(94 149 162)",
        color: "white",
        padding: "7px",
      }}
      className="header-left"
    >
      <Image src="https://i.imgur.com/oftKTG7.png" alt="airplane icon"></Image>
      <Link style={{ padding: "7px", color: "white", fontSize: "30px" }} to="/">
        Travelog
      </Link>
      {needLogout ? (
        <Link
          style={{ padding: "7px", color: "white", fontSize: "30px" }}
          to=""
          onClick={handleLogout}
        >
          Logout
        </Link>
      ) : null}
      <Icon name="home"></Icon>
    </Header>
  );
}
