import CityCard from "../CityCard/CityCard";
import { Card } from "semantic-ui-react";

export default function CityGallery({
  cities,
  removeFollower,
  addFollower,
  user,
  isCityPage,
  deleteCity,
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
          deleteCity={deleteCity}
        />
      );
      return <Card.Group itemsPerRow={1}>{cityCards}</Card.Group>;
    } else {
      cityCards = cities.map(function (city) {
        return (
          <CityCard
            city={city}
            removeFollower={removeFollower}
            addFollower={addFollower}
            key={city._id}
            user={user}
            size={"medium"}
            deleteCity={deleteCity}
          />
        );
      });
      return <Card.Group itemsPerRow={1}>{cityCards}</Card.Group>;
    }
  }
}
