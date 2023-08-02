import PageHeader from "../../components/Header/Header";
import AddCityForm from "../../components/AddCityForm/AddCityForm";
import UserCityGallery from "../../components/UserCityGallery/UserCityGallery";
import Footer from "../../components/Footer/Footer";

import { Grid, Image, Segment, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function FormPage() {
  return (
    <div>
      <Grid style={{ height: "100vmin" }}>
        <Grid.Row stretched style={{ height: "10vmin" }}>
          <Grid.Column>
            <PageHeader />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered="true">
          <Grid.Column
            width={12}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="add-city-form">
              <AddCityForm />
            </div>
          </Grid.Column>
          <Grid.Column
            width={4}
            style={{ backgroundColor: "rgb(192 204 210)", height: "90vmin" }}
          >
            <UserCityGallery />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Footer />
    </div>
  );
}
