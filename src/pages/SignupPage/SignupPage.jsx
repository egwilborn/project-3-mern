import React from "react";
import "./SignupPage.css";
import PageHeader from "../../components/Header/Header";
import SignupForm from "../../components/SignupForm/SignupForm";

export default function SignupPage({ handleSignupOrLogin }) {
  //set state here

  //define functions here

  //return ui here
  return (
    <>
      <PageHeader needLogout={false} />
      <SignupForm handleSignupOrLogin={handleSignupOrLogin} />
    </>
  );
}
