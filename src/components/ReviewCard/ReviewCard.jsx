import { Item, Icon, Image, Rating } from "semantic-ui-react";
import AddReviewForm from "../AddReviewForm/AddReviewForm";
import "./ReviewCard.css";

export default function ReviewCard({ isForm, site, handleAddReview, review }) {
  return (
    <>
      {isForm ? (
        <AddReviewForm handleAddReview={handleAddReview} site={site} />
      ) : (
        <Item>
          <Item.Content className="review-item">
            <Item.Header floated="left" className="review-header">
              <Item.Image src={review.userPhotoUrl} avatar />
              {review.username}

              <Rating
                icon="star"
                rating={review.rating}
                maxRating={5}
                name="rating"
              />
            </Item.Header>

            <Item.Description>{review.content}</Item.Description>
          </Item.Content>
        </Item>
      )}
    </>
  );
}
