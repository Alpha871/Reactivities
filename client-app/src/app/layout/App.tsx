import { useEffect } from "react";

import { Container } from "semantic-ui-react";
import ActivityDashbord from "../../features/activities/dashboard/ActivityDashboard";

import LoadingComponent from "./LoadingComponent";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";
import NavBar from "./NavBar";

function App() {
  const { activityStore } = useStore();

  useEffect(() => {
    activityStore.loadingActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial)
    return <LoadingComponent content="Loading app" />;

  return (
    <div>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashbord />
      </Container>
    </div>
  );
}

export default observer(App);
