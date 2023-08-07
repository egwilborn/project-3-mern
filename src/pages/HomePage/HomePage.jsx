import PageHeader from "../../components/Header/Header";
import SearchCitiesForm from "../../components/SearchCitiesForm/SearchCitiesForm";
import CityGallery from "../../components/CityGallery/CityGallery";
import UserCityGallery from "../../components/UserCityGallery/UserCityGallery";
import Footer from "../../components/Footer/Footer";

import "./HomePage.css";
import * as cityApi from "../../utils/cityApi";
import userService from "../../utils/userService";

import { Grid, Image, Segment, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function HomePage({ user, handleLogout }) {
  //SET STATE HERE
  const [cities, setCities] = useState([]);
  const [userCities, setUserCities] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [loadingUserCities, setLoadingUserCities] = useState(true);

  //DEFINE FUNCTIONS HERE
  async function addFollower(cityId) {
    try {
      //make server call
      const response = await cityApi.followCity(cityId);
      // console.log(response, "<-- response from server after adding follower");
      getCities(); //call get cities to re-retrieve cities from server and update state
      getUserCities(); // call get user cities to re-retrieve user cities from server and update state
    } catch (err) {
      console.log(err, "<-- error in addFollowers in homePage");
      setError("error adding follower - check console");
    }
  }
  async function removeFollower(cityId) {
    try {
      const response = await cityApi.unfollowCity(cityId);
      // console.log(response, "<-- response from server after removing follower");
      getCities(); //call get cities to re-retrieve cities from server and update state
      getUserCities(); // call get user cities to re-retrieve user cities from server and update state
    } catch (err) {
      console.log(err, "<-- error in addFollowers in homePage");
      setError("error adding follower - check console");
    }
  }
  async function getCities() {
    try {
      //make api call to get all the cities from db
      const response = await cityApi.getAllCities();
      //console.log(response.cities) //<-- test to see what form your data is coming back in
      setCities(response.cities); // set state with your data so it can be rendered in ui
      setLoading(false); //renders homepage ui after the response form the server is received
    } catch (err) {
      console.log(err, "<-- err getting cities in homepage");
      setError("Error retrieving cities");
    }
  }
  async function getUserCities() {
    try {
      //call function from userservice to retrieve only the cities the user has "followed" from the server
      const response = await userService.getUserCities();
      // console.log(response); // <-- check what response you're getting from the server
      setUserCities(response.data); //update state
      setLoadingUserCities(false);
    } catch (err) {
      console.log("error getting userCities, check api call");
      setError("Error retrieving user's cities check console and try again");
    }
  }
  async function deleteCity(cityId) {
    try {
      const response = await cityApi.deleteCity(cityId);
      getCities();
      getUserCities();
    } catch (err) {
      console.log("error deleting city, check api call");
      setSearchError("Can't find city. Check console and try again.");
    }
  }

  useEffect(() => {
    getCities();
    getUserCities();
  }, []);

  //RETURN UI HERE
  if (loading || loadingUserCities) {
    return (
      <div>
        Loading <Icon name="spinner" />
      </div>
    );
  }
  return (
    <div>
      <Grid>
        <Grid.Row stretched style={{ height: "10vmin" }}>
          <Grid.Column>
            <PageHeader
              handleLogout={handleLogout}
              needLogout={true}
              user={user}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered={true} className="home-page">
          <Grid.Column
            width={12}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <div className="city-gallery">
              <CityGallery
                cities={cities}
                addFollower={addFollower}
                removeFollower={removeFollower}
                user={user}
                deleteCity={deleteCity}
              />
            </div>
          </Grid.Column>
          <Grid.Column
            width={4}
            style={{ backgroundColor: "rgb(192 204 210)" }}
          >
            <div style={{ padding: "10px" }}>
              <UserCityGallery
                userCities={userCities}
                user={user}
                addFollower={addFollower}
                removeFollower={removeFollower}
              />
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Footer />
    </div>
  );
}
