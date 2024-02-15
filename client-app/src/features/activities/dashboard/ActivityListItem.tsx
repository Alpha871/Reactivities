import React, { SyntheticEvent, useState } from "react";
import {
  Button,
  Icon,
  Item,
  ItemContent,
  ItemDescription,
  ItemHeader,
  ItemImage,
  Label,
  Segment,
  SegmentGroup,
} from "semantic-ui-react";
import { Activity } from "../../../app/Models/activity";
import { Link } from "react-router-dom";
import { useStore } from "../../../app/stores/store";
import { format } from "date-fns";
import ActivityListItemAttendee from "./ActivityListItemAttendee";

interface Props {
  activity: Activity;
}

export default function ActivityListItem({ activity }: Props) {
  const { activityStore } = useStore();
  const { deleteActivity } = activityStore;

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
        {activity.isCancelled && (
          <Label
            attached="top"
            color="red"
            content="Cancelled"
            style={{ textAlign: "center" }}
          />
        )}
        <Item.Group>
          <Item>
            <ItemImage
              style={{ marginBottom: 5 }}
              size="tiny"
              circular
              src={activity.host?.image || "/assets/ersu.png"}
            />
            <ItemContent>
              <ItemHeader as={Link} to={`/activities/${activity.id}`}>
                {activity.title}
              </ItemHeader>
              <ItemDescription>
                Hosted by{" "}
                <Link to={`/profiles/${activity.host?.username}`}>
                  {activity.host?.displayName}
                </Link>
              </ItemDescription>

              {activity.isHost && (
                <ItemDescription>
                  <Label basic color="orange">
                    You are hosting this activity
                  </Label>
                </ItemDescription>
              )}
              {activity.isGoing && !activity.isHost && (
                <ItemDescription>
                  <Label basic color="green">
                    You are going to this activity
                  </Label>
                </ItemDescription>
              )}
            </ItemContent>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" /> {format(activity.date!, "dd MMM yyyy h:mm aa")}
          <Icon name="marker" /> {activity.venue}
        </span>
      </Segment>
      <Segment secondary>
        <ActivityListItemAttendee attendees={activity.attendees!} />
      </Segment>
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
