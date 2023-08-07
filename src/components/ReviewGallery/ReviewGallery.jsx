import ReviewCard from "../ReviewCard/ReviewCard";

import { Card } from "semantic-ui-react";

export default function ReviewGallery({
  site,
  handleAddReview,
  deleteReview,
  user,
}) {
  const reviewCards = site.reviews.map(function (review) {
    return (
      <ReviewCard
        key={review._id}
        review={review}
        deleteReview={deleteReview}
        user={user}
      />
    );
  });
  return (
    <Card.Group itemsPerRow={1}>
      {reviewCards}
      <ReviewCard isForm={true} site={site} handleAddReview={handleAddReview} />
    </Card.Group>
  );
}
