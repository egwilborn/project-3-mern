import PageHeader from "../../components/Header/Header";
import SearchCitiesForm from "../../components/SearchCitiesForm/SearchCitiesForm";
import CityGallery from "../../components/CityGallery/CityGallery";
import UserCityGallery from "../../components/UserCityGallery/UserCityGallery";

import { Grid, Image } from "semantic-ui-react";

export default function HomePage() {
  return (
    <>
      <PageHeader />
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={12}>
            <SearchCitiesForm />
            <CityGallery />
          </Grid.Column>
          <Grid.Column
            fluid
            width={1}
            style={{ backgroundColor: "rgb(192 204 210)" }}
          >
            <UserCityGallery />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
