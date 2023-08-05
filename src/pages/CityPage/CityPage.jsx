import PageHeader from "../../components/Header/Header";
import SearchCitiesForm from "../../components/SearchCitiesForm/SearchCitiesForm";
import CityGallery from "../../components/CityGallery/CityGallery";
import UserCityGallery from "../../components/UserCityGallery/UserCityGallery";
import SiteGallery from "../../components/SiteGallery/SiteGallery";
import Footer from "../../components/Footer/Footer";
import * as siteApi from "../../utils/siteApi";
import * as reviewApi from "../../utils/reviewApi";
import * as cityApi from "../../utils/cityApi";
import userService from "../../utils/userService";

import { Grid, Image, Segment, Icon } from "semantic-ui-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function CityPage({ user, handleLogout }) {
  //define varaibles here
  const { cityId } = useParams();
  const navigate = useNavigate();
  //SET STATE HERE
  const [cities, setCities] = useState([]);
  const [userCities, setUserCities] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [loadingUserCities, setLoadingUserCities] = useState(true);

  //DEFINE FUNCTIONS HERE
  async function addFollower(id) {
    try {
      //make server call
      const response = await cityApi.followCity(id);
      // console.log(response, "<-- response from server after adding follower");
      getCity(); //call get cities to re-retrieve cities from server and update state
      getUserCities(); // call get user cities to re-retrieve user cities from server and update state
    } catch (err) {
      console.log(err, "<-- error in addFollowers in homePage");
      setError("error adding follower - check console");
    }
  }
  async function removeFollower(id) {
    try {
      const response = await cityApi.unfollowCity(id);
      // console.log(response, "<-- response from server after removing follower");
      getCity(); //call get cities to re-retrieve cities from server and update state
      getUserCities(); // call get user cities to re-retrieve user cities from server and update state
    } catch (err) {
      console.log(err, "<-- error in addFollowers in homePage");
      setError("error adding follower - check console");
    }
  }
  async function getCity() {
    try {
      //make api call to get all the cities from db
      const response = await cityApi.getCity(cityId);
      //   console.log(response.city); //<-- test to see what form your data is coming back in
      setCities(response.city); // set state with your data so it can be rendered in ui
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
  async function handleAddSite(formData, cityId) {
    try {
      //make api call to create a new site
      const response = await siteApi.addSite(formData, cityId);
      //get city again with new site in document
      getCity();
    } catch (err) {
      console.log("error adding Site, check api call");
      setError("Error adding a site. check console and try again");
    }
  }
  async function handleDeleteSite(siteId) {
    try {
      //make api call to delete the site
      const response = await siteApi.deleteSite(siteId);
      //get city again with site removed from document
      getCity();
    } catch (err) {
      console.log("error deleting Site, check api call");
      setError("Error deleting a site. check console and try again");
    }
  }

  async function handleAddReview(data, siteId) {
    try {
      const response = await reviewApi.addReview(data, siteId);
      getCity();
    } catch (err) {
      console.log(err, "<-- err in adding review, check review api");
    }
  }

  async function deleteCity(cityId) {
    try {
      const response = await cityApi.deleteCity(cityId);
      navigate("/");
    } catch (err) {
      console.log("error deleting city, check api call");
      setError("Error deleting a city. check console and try again");
    }
  }
  useEffect(() => {
    getCity();
    getUserCities();
  }, [cityId]);

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
                isCityPage={true}
                deleteCity={deleteCity}
              />
              <SiteGallery
                sites={cities.sites}
                handleAddSite={handleAddSite}
                handleDeleteSite={handleDeleteSite}
                handleAddReview={handleAddReview}
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
