import { Card } from "semantic-ui-react";
import SiteCard from "../SiteCard/SiteCard";

export default function SiteGallery({
  sites,
  handleAddSite,
  handleDeleteSite,
  handleAddReview,
  deleteReview,
  user,
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
        deleteReview={deleteReview}
        user={user}
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
