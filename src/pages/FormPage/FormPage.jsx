import PageHeader from "../../components/Header/Header";
import AddCityForm from "../../components/AddCityForm/AddCityForm";
import UserCityGallery from "../../components/UserCityGallery/UserCityGallery";
import Footer from "../../components/Footer/Footer";

import { Grid, Image, Segment, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function FormPage() {
  return (
    <div style={{ position: "relative", height: "100vmin" }}>
      <Grid>
        <Grid.Row stretched style={{ height: "10vmin" }}>
          <Grid.Column>
            <PageHeader />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row
          centered
          style={{
            height: "80vmin",
          }}
          className="home-page"
        >
          <Grid.Column
            width={12}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{}}>
              <AddCityForm />
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
      <Container
        fluid
        style={{ position: "absolute", bottom: "0", height: "10vmin" }}
      >
        <Footer />
      </Container>
    </div>
  );
}
