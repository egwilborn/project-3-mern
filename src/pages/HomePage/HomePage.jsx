import PageHeader from "../../components/Header/Header";
import SearchCitiesForm from "../../components/SearchCitiesForm/SearchCitiesForm";
import CityGallery from "../../components/CityGallery/CityGallery";
import UserCityGallery from "../../components/UserCityGallery/UserCityGallery";
import Footer from "../../components/Footer/Footer";

import "./HomePage.css";

import { Grid, Image, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <Grid style={{ height: "100vmin" }}>
        <Grid.Row stretched style={{ height: "10vmin" }}>
          <Grid.Column>
            <PageHeader />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row
          centered="true"
          style={{
            height: "80vmin",
          }}
          className="home-page"
        >
          <Grid.Column width={12}>
            <SearchCitiesForm />
            <CityGallery />
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
