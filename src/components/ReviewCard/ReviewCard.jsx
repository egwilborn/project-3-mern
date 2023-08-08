import { Item, Icon, Image, Rating } from "semantic-ui-react";
import { Link } from "react-router-dom";
import AddReviewForm from "../AddReviewForm/AddReviewForm";
import "./ReviewCard.css";

export default function ReviewCard({
  isForm,
  site,
  handleAddReview,
  review,
  deleteReview,
  user,
}) {
  //define functions here
  function handleDelete() {
    deleteReview(review._id);
    //add in that you can only delete reviews that you added
  }
  //return ui here
  return (
    <>
      {isForm ? (
        <AddReviewForm handleAddReview={handleAddReview} site={site} />
      ) : (
        <Item
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="review-card"
        >
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

            <Item.Description style={{ color: "black" }}>
              {review.content}
            </Item.Description>
          </Item.Content>
          {user._id === review.userId ? (
            <Link to="" onClick={handleDelete}>
              <Icon name="trash" size="large" fitted />
            </Link>
          ) : null}
        </Item>
      )}
    </>
  );
}
