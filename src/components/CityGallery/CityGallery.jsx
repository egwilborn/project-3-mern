import CityCard from "../CityCard/CityCard";
import { Card } from "semantic-ui-react";

export default function CityGallery({
  cities,
  removeFollower,
  addFollower,
  user,
  isCityPage,
}) {
  //must iterate over every city object witin "cities" and make a city card for them
  let cityCards = undefined;
  {
    if (isCityPage) {
      cityCards = (
        <CityCard
          city={cities}
          removeFollower={removeFollower}
          addFollower={addFollower}
          key={cities._id}
          user={user}
          size={"medium"}
          isCityPage={isCityPage}
        />
      );
      return <Card.Group itemsPerRow={1}>{cityCards}</Card.Group>;
    }
  }
  cityCards = cities.map(function (city) {
    return (
      <CityCard
        city={city}
        removeFollower={removeFollower}
        addFollower={addFollower}
        key={city._id}
        user={user}
        size={"medium"}
      />
    );
  });
  return <Card.Group itemsPerRow={1}>{cityCards}</Card.Group>;
}
