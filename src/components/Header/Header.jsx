import { Header, Image, Icon } from "semantic-ui-react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function PageHeader() {
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
      <Link style={{ padding: "7px", color: "white", fontSize: "30px" }} to="">
        Travelog
      </Link>
      <Icon name="home"></Icon>
    </Header>
  );
}
