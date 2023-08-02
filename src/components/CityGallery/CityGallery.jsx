import CityCard from "../CityCard/CityCard";
import { Card } from "semantic-ui-react";

export default function CityGallery({ cities }) {
  //must iterate over every city object witin "cities" and make a city card for them

  const cityCards = cities.map(function (city) {
    return <CityCard city={city} />;
  });
  return <Card.Group itemsPerRow={1}>{cityCards}</Card.Group>;
}
