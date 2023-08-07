import CityCard from "../CityCard/CityCard";
import { useState } from "react";
import { Card, Segment } from "semantic-ui-react";

export default function UserCityGallery({
  userCities,
  user,
  addFollower,
  removeFollower,
}) {
  const cityCards = userCities.map(function (city) {
    return (
      <CityCard
        key={city._id}
        city={city}
        size={"small"}
        user={user}
        addFollower={addFollower}
        removeFollower={removeFollower}
        isUserCity={true}
      />
    );
  });
  return (
    <>
      <Segment
        style={{
          border: "0px",
          backgroundColor: "rgb(192 204 210)",
          textAlign: "center",
          fontSize: "20px",
        }}
        as="h2"
        vertical
      >
        Your Travel Log:
      </Segment>
      <Card.Group itemsPerRow={1}>{cityCards}</Card.Group>
    </>
  );
}
