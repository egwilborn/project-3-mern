import { Header, Image, Icon } from "semantic-ui-react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function PageHeader({ handleLogout, needLogout, user }) {
  return (
    <div className="allpage-header">
      <Header
        style={{
          color: "white",
          padding: "7px",
        }}
        floated="left"
        className="header-left"
      >
        <Image
          size="small"
          src="https://i.imgur.com/oftKTG7.png"
          alt="airplane icon"
        ></Image>
        <Link
          style={{ padding: "7px", color: "white", fontSize: "30px" }}
          to="/"
        >
          Travelog
        </Link>
      </Header>
      <Header
        className="page-header-right"
        floated="right"
        style={{
          color: "white",
          padding: "7px",
        }}
      >
        {needLogout ? (
          <>
            <Image size="small" circular src={user.photoUrl} bordered />
            <Link
              style={{ padding: "7px", color: "white", fontSize: "30px" }}
              to=""
              onClick={handleLogout}
              className="logout"
            >
              Logout
            </Link>
          </>
        ) : null}
      </Header>
    </div>
  );
}
