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
        size={"tiny"}
        user={user}
        addFollower={addFollower}
        removeFollower={removeFollower}
      />
    );
  });
  return (
    <>
      <Segment as="h2">{user.username}'s Cities</Segment>
      <Card.Group itemsPerRow={1}>{cityCards}</Card.Group>
    </>
  );
}
