import React from "react";

import { observer } from "mobx-react-lite";
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { UserActivity } from "../../app/Models/userActivity";
import { format } from "date-fns";

interface Props {
  Activity: UserActivity;
}

export default observer(function ProfileCard({ Activity }: Props) {
  return (
    <Card as={Link} to={`/activities/${Activity.id}`}>
      <Image
        src={`/assets/categoryImages/${Activity.category}.jpg`}
        style={{ minHeight: 100, objectFit: "cover" }}
      />

      <Card.Content>
        <Card.Header style={{ textAlign: "center" }}>
          {Activity.title}
        </Card.Header>
        <Card.Meta textAlign="center">
          <div>{format(new Date(Activity.date), "do LLL")}</div>
          <div>{format(new Date(Activity.date), "h:mm a")}</div>
        </Card.Meta>
      </Card.Content>
    </Card>
  );
});
