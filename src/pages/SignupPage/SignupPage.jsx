import React from "react";
import "./SignupPage.css";
import PageHeader from "../../components/Header/Header";
import SignupForm from "../../components/SignupForm/SignupForm";
import Footer from "../../components/Footer/Footer";

export default function SignupPage({ handleSignupOrLogin }) {
  return (
    <>
      <SignupForm handleSignupOrLogin={handleSignupOrLogin} />
      <Footer isLoggedOut={true} />
    </>
  );
}
