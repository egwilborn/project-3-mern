import AddSiteForm from "../AddSiteForm/AddSiteForm";
import { Card, Icon, Image } from "semantic-ui-react";

export default function SiteCard({ isForm, site, size }) {
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
            <Card.Header>{site.name}</Card.Header>
            <Card.Meta>edit delete</Card.Meta>
            <Card.Description>{site.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="comments" />
            {site.reviews.length} Reviews
          </Card.Content>
        </Card>
      )}
    </>
  );
}
