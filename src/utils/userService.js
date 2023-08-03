import tokenService from "./tokenService";

const BASE_URL = "/api/users/";

function signup(user) {
  return (
    fetch(BASE_URL + "signup", {
      method: "POST", // creating a new user
      body: user, //using formdata not json so the body is just the formdata
      //no header for sending over form data unless logged in and needing authentication
    })
      .then((res) => {
        if (res.ok) return res.json();
        // Probably a duplicate email
        throw new Error("Email already taken!");
      })
      // Parameter destructuring!
      .then(({ token }) => tokenService.setToken(token))
  );
  // The above could have been written as
  //.then((token) => token.token);
}

function getUser() {
  return tokenService.getUserFromToken();
}

function logout() {
  tokenService.removeToken();
}

function login(creds) {
  return fetch(BASE_URL + "login", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(creds),
  })
    .then((res) => {
      // Valid login if we have a status of 2xx (res.ok)
      if (res.ok) return res.json();
      throw new Error("Bad Credentials!");
    })
    .then(({ token }) => tokenService.setToken(token));
}

export function getUserCities() {
  return fetch(BASE_URL + "cities", {
    method: "GET",
    headers: {
      // for sending http requests when logged in - supplies req.user

      Authorization: "Bearer " + tokenService.getToken(), // < this is how we get the token from localstorage and add it to our api request
      // so the server knows who the request is coming from when the client is trying to make a POST
    },
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error(
      "something went wrong with getAllCities request in city api"
    );
  });
}

export default {
  signup,
  getUser,
  logout,
  login,
  getUserCities,
};
