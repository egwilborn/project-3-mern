import CityCard from "../CityCard/CityCard";
import { Card } from "semantic-ui-react";

export default function CityGallery({
  cities,
  removeFollower,
  addFollower,
  user,
}) {
  //must iterate over every city object witin "cities" and make a city card for them

  const cityCards = cities.map(function (city) {
    return (
      <CityCard
        city={city}
        removeFollower={removeFollower}
        addFollower={addFollower}
        key={city._id}
        user={user}
      />
    );
  });
  return <Card.Group itemsPerRow={1}>{cityCards}</Card.Group>;
}
