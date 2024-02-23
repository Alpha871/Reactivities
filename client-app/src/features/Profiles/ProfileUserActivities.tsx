import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useStore } from "../../app/stores/store";
import { Grid, Header, Tab, TabPane, TabProps } from "semantic-ui-react";
import ActivityTab from "./ActivityTab";

export default observer(function ProfileUserActivities() {
  const { profileStore } = useStore();
  const { userActivities, loadingActivities, profile, loadUserActivities } =
    profileStore;

  const panes = [
    {
      menuItem: "Future Events",
      pane: { key: "future" },
    },
    {
      menuItem: "Past Events",
      pane: { key: "past" },
    },
    {
      menuItem: "Hosting",
      pane: { key: "hosting" },
    },
  ];

  useEffect(() => {
    loadUserActivities(profile!.username);
  }, [loadUserActivities, profile]);

  function handleTabChange(data: TabProps) {
    loadUserActivities(
      profile!.username,
      panes[data.activeIndex as number].pane.key
    );
  }

  return (
    <TabPane loading={loadingActivities}>
      <Grid>
        <Grid.Column width={16}>
          <Header floated="left" icon="calendar" content="Activities" />
        </Grid.Column>
        <Grid.Column width={16}>
          <Tab
            menu={{ secondary: true, pointing: true }}
            panes={panes}
            onTabChange={(_, data) => handleTabChange(data)}
          />
          <br />
          <ActivityTab Activity={userActivities} />
        </Grid.Column>
      </Grid>
    </TabPane>
  );
});
