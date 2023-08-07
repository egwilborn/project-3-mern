import React from "react";
import "./LoginPage.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import PageHeader from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function LoginPage({ handleSignupOrLogin }) {
  return (
    <div style={{ height: "100vh" }}>
      <LoginForm handleSignupOrLogin={handleSignupOrLogin} />
      <Footer isLoggedOut={true} />
    </div>
  );
}
