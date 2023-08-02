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
