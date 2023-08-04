import AddSiteForm from "../AddSiteForm/AddSiteForm";
import ReviewGallery from "../ReviewGallery/ReviewGallery";
import { Card, Icon, Image, Dimmer, Button, Segment } from "semantic-ui-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as siteApi from "../../utils/siteApi";

export default function SiteCard({
  isForm,
  site,
  size,
  handleAddSite,
  handleDeleteSite,
  handleAddReview,
}) {
  //define variables
  const navigate = useNavigate();
  //SET STATE HERE
  const [dimmer, setDimmer] = useState(false);

  //DEFINE FUNCTIONS HERE
  function handleOpen() {
    setDimmer(true);
  }
  function handleClose() {
    setDimmer(false);
  }

  function handleDelete(e) {
    e.preventDefault();
    handleDeleteSite(site._id);
  }

  return (
    <>
      {isForm ? (
        <Card>
          <AddSiteForm handleAddSite={handleAddSite} />
        </Card>
      ) : (
        <Card>
          <Image
            src={site.photoUrl}
            size={size}
            wrapped
            ui={false}
            className="site-img"
          />

          <Card.Content>
            <Card.Header>
              {site.name} <Icon name="clone" link onClick={handleOpen} />
            </Card.Header>
            <Card.Meta>
              <Link to="" onClick={handleDelete}>
                delete
              </Link>
              <Icon name="trash" size="small" />
            </Card.Meta>
            <Card.Description>{site.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="comments" />
            {site.reviews.length} Reviews
          </Card.Content>
          <Dimmer active={dimmer} onClickOutside={handleClose} page>
            <Card style={{ width: "40vw" }}>
              <Image
                src={site.photoUrl}
                size={size}
                wrapped
                ui={false}
                className="site-img"
              />
              <Card.Content>
                <Card.Header>{site.name}</Card.Header>
                <Card.Meta>
                  <Link to="" onClick={handleDelete}>
                    delete
                  </Link>{" "}
                  <Icon name="trash" size="small" />
                </Card.Meta>
                <Card.Description>{site.description}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Segment>Reviews</Segment>
                <ReviewGallery handleAddReview={handleAddReview} site={site} />
              </Card.Content>
            </Card>
          </Dimmer>
        </Card>
      )}
    </>
  );
}
