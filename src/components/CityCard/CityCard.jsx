import React from "react";
import { Card, Icon, Image, Segment, Checkbox } from "semantic-ui-react";

import "./CityCard.css";

export default function CityCard({ city }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <p className="card-header">
            {city.name} <Checkbox />
          </p>
        </Card.Header>
        <Card.Meta>
          <span className="country">{city.country}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content>
        <Image src={city.photoUrl} size="medium" />
      </Card.Content>
    </Card>
  );
}
