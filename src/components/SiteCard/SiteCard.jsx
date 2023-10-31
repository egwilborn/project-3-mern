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
  deleteReview,
  user,
}) {
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
            <Card.Header style={{ fontSize: "20px" }}>
              <Link style={{ color: "black" }} to="" onClick={handleOpen}>
                {site.name} <Icon name="clone" />
              </Link>
            </Card.Header>
            <Card.Meta>
              <Link to="" onClick={handleDelete}>
                delete
                <Icon name="trash" size="small" />
              </Link>
            </Card.Meta>
            <Card.Description style={{ fontSize: "15px" }}>
              {site.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="comments" />
            {site.reviews.length} Reviews
          </Card.Content>
          <Dimmer active={dimmer} onClickOutside={handleClose} page>
            <Card
              style={{
                height: "auto",
                width: "40vw",
                overflowY: "scroll",
                paddingBottom: "50px",
                paddingTop: "30px",
              }}
            >
              <Image
                src={site.photoUrl}
                size={size}
                wrapped
                ui={false}
                className="site-img"
              />
              <Card.Content>
                <Card.Header style={{ fontSize: "20px" }}>
                  {site.name}
                </Card.Header>
                <Card.Meta>
                  <Link to="" onClick={handleDelete}>
                    delete
                    <Icon name="trash" size="small" />
                  </Link>
                </Card.Meta>
                <Card.Description style={{ fontSize: "15px" }}>
                  {site.description}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Segment vertical style={{ color: "black", fontSize: "20px" }}>
                  Reviews
                </Segment>
                <ReviewGallery
                  handleAddReview={handleAddReview}
                  deleteReview={deleteReview}
                  site={site}
                  user={user}
                />
              </Card.Content>
            </Card>
          </Dimmer>
        </Card>
      )}
    </>
  );
}
