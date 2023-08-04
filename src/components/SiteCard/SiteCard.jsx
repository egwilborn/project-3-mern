import AddSiteForm from "../AddSiteForm/AddSiteForm";
import { Card, Icon, Image, Dimmer, Button } from "semantic-ui-react";
import { useState } from "react";

export default function SiteCard({ isForm, site, size }) {
  //SET STATE HERE
  const [dimmer, setDimmer] = useState(false);

  //DEFINE FUNCTIONS HERE
  function handleOpen() {
    setDimmer(true);
  }
  function handleClose() {
    setDimmer(false);
  }

  return (
    <>
      {isForm ? (
        <Card>
          <AddSiteForm />
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
            <Card.Meta>edit delete</Card.Meta>
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
                <Card.Meta>edit delete</Card.Meta>
                <Card.Description>{site.description}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Icon name="comments" />
                {site.reviews.length} Reviews
              </Card.Content>
            </Card>
          </Dimmer>
        </Card>
      )}
    </>
  );
}
