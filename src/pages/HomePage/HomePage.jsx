import PageHeader from "../../components/Header/Header";
import SearchCitiesForm from "../../components/SearchCitiesForm/SearchCitiesForm";
import CityGallery from "../../components/CityGallery/CityGallery";
import UserCityGallery from "../../components/UserCityGallery/UserCityGallery";
import Footer from "../../components/Footer/Footer";

import "./HomePage.css";
import * as cityApi from "../../utils/cityApi";

import { Grid, Image, Segment, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function HomePage({ user }) {
  //SET STATE HERE
  const [cities, setCities] = useState([]);
  const [userCities, setUserCities] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  //DEFINE FUNCTIONS HERE
  async function addFollower(cityId) {
    try {
      const response = await cityApi.followCity(cityId);
      console.log(response, "<-- response from server after adding follower");
    } catch (err) {
      console.log(err, "<-- error in addFollowers in homePage");
      setError("error adding follower - check console");
    }
  }
  async function removeFollower(cityId) {
    try {
      const response = await cityApi.unfollowCity(cityId);
      console.log(response, "<-- response from server after adding follower");
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
      setLoading(false);
    } catch (err) {
      console.log(err, "<-- err getting cities in homepage");
      setError("Error retrieving cities");
    }
  }
  useEffect(() => {
    getCities();
  }, []);

  //RETURN UI HERE
  if (loading) {
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
            <PageHeader />
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
            <SearchCitiesForm />
            <div className="city-gallery">
              <CityGallery
                cities={cities}
                addFollower={addFollower}
                removeFollower={removeFollower}
                user={user}
              />
            </div>
          </Grid.Column>
          <Grid.Column
            width={4}
            style={{ backgroundColor: "rgb(192 204 210)" }}
          >
            <UserCityGallery />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Footer />
    </div>
  );
}
