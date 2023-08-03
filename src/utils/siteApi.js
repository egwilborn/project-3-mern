import tokenService from "./tokenService";

const BASE_URL = "/api";
// /cities/:id/site
export function addSite(data, cityId) {
  return fetch(`${BASE_URL}/cities/${cityId}/site`, {
    method: "POST",
    body: data,
    headers: {
      // convention for sending formdata when logged in

      Authorization: "Bearer " + tokenService.getToken(), // < this is how we get the token from localstorage and and it to our api request
      // so the server knows who the request is coming from when the client is trying to make a POST
    },
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("something went wrong with add site, check siteApi");
  });
}
