import { Icon, Item, Rating, Form, Button } from "semantic-ui-react";
import { useState } from "react";

import "./AddReviewForm.css";

import * as reviewApi from "../../utils/reviewApi";
import { useNavigate } from "react-router-dom";

export default function AddReviewForm({
  site,
  handleAddReview = { handleAddReview },
}) {
  //define variables
  const navigate = useNavigate();
  //SET STATE HERE
  const [state, setState] = useState({
    content: "",
  });
  const [reviewRating, setReviewRating] = useState();
  //DEFINE FUNCTIONS HERE
  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }
  function handleChangeOnRate(e, { rating }) {
    e.preventDefault();
    setReviewRating(rating);
  }

  // when you call the reviewsAPi function, you need to have both the data and the siteId
  async function handleSubmit(e) {
    e.preventDefault();
    const form = {
      content: state.content,
      rating: reviewRating,
    };
    //make api call
    handleAddReview(form, site._id);
    //clear the form
    setReviewRating(0);
    setState({ content: "" });
  }
  //RETURN UI HERE
  return (
    <Item className="review-form-item">
      <Form onSubmit={handleSubmit}>
        <Item.Content className="add-review-form">
          <Item.Header className="add-review-header">
            <p>Leave a Review</p>
            <Rating
              icon="star"
              maxRating={5}
              onRate={handleChangeOnRate}
              name="rating"
              floated="left"
              style={{ marginBottom: "10px" }}
            />
            <Button className="review-submit-button" size="tiny" type="submit">
              Submit Review
            </Button>
          </Item.Header>
          <Item.Description className="review-form-text-area">
            <Form.TextArea
              fluid={true}
              rows={4}
              placeholder="Review"
              name="content"
              value={state.content}
              required
              onChange={handleChange}
            ></Form.TextArea>
          </Item.Description>
        </Item.Content>
      </Form>
    </Item>
  );
}
