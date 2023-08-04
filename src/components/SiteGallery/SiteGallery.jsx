import { Card } from "semantic-ui-react";
import SiteCard from "../SiteCard/SiteCard";

export default function SiteGallery({
  sites,
  city,
  handleAddSite,
  handleDeleteSite,
  handleAddReview,
}) {
  const siteCards = sites.map(function (site) {
    return (
      <SiteCard
        isForm={false}
        key={site._id}
        site={site}
        size={"small"}
        handleDeleteSite={handleDeleteSite}
        handleAddReview={handleAddReview}
      />
    );
  });
  return (
    <>
      <Card.Group itemsPerRow={2}>
        {siteCards}
        <SiteCard isForm={true} handleAddSite={handleAddSite} key="FormCard" />
      </Card.Group>
    </>
  );
}
