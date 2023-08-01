import React from "react";
import "./LoginPage.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import PageHeader from "../../components/Header/Header";

export default function LoginPage({ handleSignupOrLogin }) {
  return (
    <div>
      <PageHeader />
      <LoginForm handleSignupOrLogin={handleSignupOrLogin} />
    </div>
  );
}
