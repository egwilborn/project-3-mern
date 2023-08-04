import ReviewCard from "../ReviewCard/ReviewCard";

import { Card } from "semantic-ui-react";

export default function ReviewGallery({ site, handleAddReview }) {
  const reviewCards = site.reviews.map(function (review) {
    return <ReviewCard key={review._id} review={review} />;
  });
  return (
    <Card.Group itemsPerRow={1}>
      {reviewCards}
      <ReviewCard isForm={true} site={site} handleAddReview={handleAddReview} />
    </Card.Group>
  );
}
