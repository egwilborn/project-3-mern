import { Card } from "semantic-ui-react";
import SiteCard from "../SiteCard/SiteCard";

export default function SiteGallery({ sites }) {
  const siteCards = sites.map(function (site) {
    return (
      <SiteCard isForm={false} key={site._id} site={site} size={"small"} />
    );
  });
  return (
    <>
      <Card.Group itemsPerRow={2}>
        {siteCards}
        <SiteCard isForm={true} key="FormCard" />
      </Card.Group>
    </>
  );
}
