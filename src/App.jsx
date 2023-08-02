import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import HomePage from "./pages/HomePage/HomePage";
import FormPage from "./pages/FormPage/FormPage";
import userService from "./utils/userService";

function App() {
  //SET STATE HERE
  const [user, setUser] = useState(userService.getUser());
  //DEFINE FUNCTIONS HERE
  function handleSignupOrLogin() {
    setUser(userService.getUser());
  }
  //RETURN UI HERE
  if (!user) {
    return (
      <Routes>
        <Route
          path="/login"
          element={<LoginPage handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/signup"
          element={<SignupPage handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/login"
        element={<LoginPage handleSignupOrLogin={handleSignupOrLogin} />}
      />
      <Route path="/form" element={<FormPage />} />
      <Route
        path="/signup"
        element={<SignupPage handleSignupOrLogin={handleSignupOrLogin} />}
      />
    </Routes>
  );
}

export default App;
