import tokenService from "./tokenService";

const BASE_URL = "/api";

export function addReview(data, siteId) {
  return fetch(`${BASE_URL}/sites/${siteId}/reviews`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + tokenService.getToken(),
    },
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("something went wrong with add site, check siteApi");
  });
}
