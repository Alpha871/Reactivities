import React, { SyntheticEvent, useState } from "react";
import { Activity } from "../../../app/Models/activity";
import {
  Button,
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemMeta,
  Label,
  Segment,
} from "semantic-ui-react";

interface Props {
  activities: Activity[];
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
  submitting: boolean;
}

export default function ActivityList({
  activities,
  selectActivity,
  deleteActivity,
  submitting,
}: Props) {
  const [target, setTarget] = useState("");

  function handleActivityDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  }

  return (
    <Segment>
      <ItemGroup divided>
        {activities.map((activity) => (
          <Item key={activity.id}>
            <ItemContent>
              <ItemHeader as="a">{activity.title}</ItemHeader>
              <ItemMeta>{activity.date}</ItemMeta>
              <ItemDescription>
                <div>{activity.description} </div>
                <div>
                  {activity.city}, {activity.venue}{" "}
                </div>
              </ItemDescription>
              <Item.Extra>
                <Button
                  onClick={() => selectActivity(activity.id)}
                  floated="right"
                  content="view"
                  color="blue"
                />
                <Button
                  onClick={(e) => handleActivityDelete(e, activity.id)}
                  floated="right"
                  content="Delete"
                  color="red"
                  name={activity.id}
                  loading={submitting && target === activity.id}
                />
                <Label basic content={activity.category} />
              </Item.Extra>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </Segment>
  );
}
