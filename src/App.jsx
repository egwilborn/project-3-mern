import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import HomePage from "./pages/HomePage/HomePage";
import FormPage from "./pages/FormPage/FormPage";
import CityPage from "./pages/CityPage/CityPage";

import userService from "./utils/userService";

function App() {
  //SET STATE HERE
  const [user, setUser] = useState(userService.getUser());
  //DEFINE FUNCTIONS HERE
  function handleSignupOrLogin() {
    setUser(userService.getUser());
  }

  function handleLogout() {
    userService.logout();
    setUser(null);
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
      <Route
        path="/"
        element={<HomePage handleLogout={handleLogout} user={user} />}
      />
      <Route
        path="/login"
        element={<LoginPage handleSignupOrLogin={handleSignupOrLogin} />}
      />
      <Route
        path="/form"
        element={<FormPage handleLogout={handleLogout} user={user} />}
      />
      <Route
        path="/signup"
        element={<SignupPage handleSignupOrLogin={handleSignupOrLogin} />}
      />
      <Route
        path="/:cityId/"
        element={<CityPage user={user} handleLogout={handleLogout} />}
      />
    </Routes>
  );
}

export default App;
