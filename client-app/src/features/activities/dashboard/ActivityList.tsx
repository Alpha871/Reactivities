import React from "react";
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
}

export default function ActivityList({
  activities,
  selectActivity,
  deleteActivity,
}: Props) {
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
                  onClick={() => deleteActivity(activity.id)}
                  floated="right"
                  content="Delete"
                  color="red"
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