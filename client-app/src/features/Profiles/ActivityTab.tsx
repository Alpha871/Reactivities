import { observer } from "mobx-react-lite";

import { Card, GridColumn } from "semantic-ui-react";
import { UserActivity } from "../../app/Models/userActivity";
import ActivityCard from "./ActivityCard";

interface Props {
  Activity: UserActivity[];
}

export default observer(function ActivityTab({ Activity }: Props) {
  return (
    <GridColumn>
      <Card.Group itemsPerRow={4}>
        {Activity.map((activity) => (
          <ActivityCard key={activity.id} Activity={activity} />
        ))}
      </Card.Group>
    </GridColumn>
  );
});
