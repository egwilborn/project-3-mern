import {
  Card,
  Icon,
  Image,
  Segment,
  Checkbox,
  Container,
} from "semantic-ui-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./CityCard.css";

export default function CityCard({
  city,
  addFollower,
  removeFollower,
  user,
  size,
  isUserCity,
  deleteCity,
}) {
  //when checkbox status is changed to checked, call add follower function
  //when checkbox status is changed to uncheck, call remove follower function

  //find the index of the user's id
  const userIndex = city.usersFollowing.findIndex(
    (cityUser) => cityUser === user._id
  );

  //if the user's index is -1 : the user isn't in the list
  //if the users index is >-1 : the user is in the list
  const isChecked = userIndex > -1 ? true : false;
  //if the user has followed the city, then we need to remove the user when the box is changed
  //if the user hasn't followed the city, then we need to add the user when the box is changed
  const handleCheck =
    userIndex > -1
      ? () => removeFollower(city._id)
      : () => addFollower(city._id);

  function handleDeleteCity() {
    deleteCity(city._id);
  }
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <div className="card-header">
            <Link to={`/${city._id}`}> {city.name} </Link>
            <Checkbox checked={isChecked} onChange={handleCheck} />
          </div>
        </Card.Header>
        <Card.Meta
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span className="country">{city.country}</span>
          {isUserCity ? null : (
            <Link to="" onClick={handleDeleteCity}>
              <Icon name="trash" size="large" />
            </Link>
          )}
        </Card.Meta>
      </Card.Content>
      <Card.Content
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          maxWidth: "60vw",
        }}
      >
        <Image
          src={city.photoUrl}
          size={size}
          style={{ marginRight: "20px" }}
        />

        {isUserCity ? null : (
          <Container style={{ fontSize: "15px" }}>{city.description}</Container>
        )}
      </Card.Content>
    </Card>
  );
}
