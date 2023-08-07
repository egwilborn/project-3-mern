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
    throw new Error("something went wrong with add review, check reviewApi");
  });
}

export function deleteReview(reviewId) {
  return fetch(`${BASE_URL}/reviews/${reviewId}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
    },
  }).then((res) => {
    if (res.ok) return res.json();
    throw new Error("something went wrong with delete review, check reviewApi");
  });
}
