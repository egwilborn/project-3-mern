import tokenService from "./tokenService";

const BASE_URL = "/api/cities";

export function addCity(data) {
  return fetch(BASE_URL, {
    method: "POST", // creating a city
    //logged in and needing authentication so we need a header
    headers: {
      // convention for sending formdata when logged in

      Authorization: "Bearer " + tokenService.getToken(), // < this is how we get the token from localstorage and and it to our api request
      // so the server knows who the request is coming from when the client is trying to make a POST
    },
    body: data, //using formdata not json so the body is just the formdata
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("something went wrong with add city");
  });
}

export function getAllCities() {
  return fetch(BASE_URL, {
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

//when the check box is clicked (to check), the http request needs to be made to add the user to the usersFollowing
//array in the cities model
export function followCity(cityId) {
  return fetch(`${BASE_URL}/${cityId}/follow`, {
    method: "POST",
    headers: {
      // for sending http requests when logged in - supplies req.user

      Authorization: "Bearer " + tokenService.getToken(), // < this is how we get the token from localstorage and and it to our api request
      // so the server knows who the request is coming from when the client is trying to make a POST
    },
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("something went wrong with followCity request in city api");
  });
}

//when the check box is clicked (to uncheck), the http request needs to be made to delete the user from the usersFollowing
//array in the cities model
export function unfollowCity(cityId) {
  return fetch(`${BASE_URL}/${cityId}/unfollow`, {
    method: "DELETE",
    headers: {
      // for sending http requests when logged in - supplies req.user

      Authorization: "Bearer " + tokenService.getToken(), // < this is how we get the token from localstorage and and it to our api request
      // so the server knows who the request is coming from when the client is trying to make a POST
    },
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("something went wrong with followCity request in city api");
  });
}

export function getCity(cityId) {
  return fetch(`${BASE_URL}/${cityId}`, {
    method: "GET",
    headers: {
      // for sending http requests when logged in - supplies req.user

      Authorization: "Bearer " + tokenService.getToken(), // < this is how we get the token from localstorage and and it to our api request
      // so the server knows who the request is coming from when the client is trying to make a POST
    },
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("something went wrong with followCity request in city api");
  });
}
