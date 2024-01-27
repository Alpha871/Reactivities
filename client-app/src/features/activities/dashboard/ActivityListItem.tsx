import React, { SyntheticEvent, useState } from "react";
import {
  Button,
  Icon,
  Item,
  ItemContent,
  ItemDescription,
  ItemHeader,
  ItemImage,
  Segment,
  SegmentGroup,
} from "semantic-ui-react";
import { Activity } from "../../../app/Models/activity";
import { Link } from "react-router-dom";
import { useStore } from "../../../app/stores/store";

interface Props {
  activity: Activity;
}

export default function ActivityListItem({ activity }: Props) {
  const [target, setTarget] = useState("");
  const { activityStore } = useStore();
  const { deleteActivity, loading } = activityStore;

  function handleActivityDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  }

  return (
    <SegmentGroup>
      <Segment>
        <Item.Group>
          <Item>
            <ItemImage size="tiny" circular src="/assets/user.png" />
            <ItemContent>
              <ItemHeader as={Link} to={`/activities/${activity.id}`}>
                {activity.title}
              </ItemHeader>
              <ItemDescription>Hosted by Alpha</ItemDescription>
            </ItemContent>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" /> {activity.date}
          <Icon name="marker" /> {activity.venue}
        </span>
      </Segment>
      <Segment secondary>Attendees go here</Segment>
      <Segment clearing>
        <span>{activity.description}</span>
        <Button
          as={Link}
          to={`/activities/${activity.id}`}
          color="teal"
          floated="right"
          content="View"
        />
      </Segment>
    </SegmentGroup>
  );
}
