import { Redirect, Switch } from "react-router-dom";
import { BothRouter, GuestRoute, UserRoute } from "./components";
import { LoginLayout, MinimalLayout, SidebarLayout } from "./layout";
import {
  Dashboard,
  Home,
  HomeHero,
  HomePreview,
  Leaderboard,
  Login,
  NotFound,
  Statistik,
  Uploads,
} from "./pages";

const Routes = () => {
  return (
    <Switch>
      <Redirect from="/" to="/home" exact />
      <BothRouter path="/home" exact component={Home} layout={MinimalLayout} />
      <BothRouter
        path="/home/hero"
        exact
        component={HomeHero}
        layout={MinimalLayout}
      />
      <BothRouter
        path="/home/preview"
        exact
        component={HomePreview}
        layout={MinimalLayout}
      />
      <GuestRoute path="/login" exact component={Login} layout={LoginLayout} />
      <UserRoute
        path="/dashboard"
        exact
        component={Dashboard}
        layout={SidebarLayout}
      />
      <UserRoute
        path="/statistik"
        exact
        component={Statistik}
        layout={SidebarLayout}
      />
      <BothRouter
        path="/not-found"
        exact
        component={NotFound}
        layout={MinimalLayout}
      />
      <UserRoute
        path="/leaderboard"
        exact
        component={Leaderboard}
        layout={SidebarLayout}
      />
      <UserRoute
        path="/uploads"
        exact
        component={Uploads}
        layout={SidebarLayout}
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
