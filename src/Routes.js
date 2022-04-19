import { Redirect, Switch } from 'react-router-dom';
import { BothRouter, GuestRoute, UserRoute } from './components';
import { LoginLayout, MinimalLayout, SidebarLayout } from './layout';
import { Dashboard, Home, HomeHero, HomePreview, Login, Statistik } from './pages';

const Routes = () => {
     return(
          <Switch>
               <Redirect from="/" to="/home" exact />
               <BothRouter path="/home" exact component={Home} layout={MinimalLayout}  />
               <BothRouter path="/home/hero" exact component={HomeHero} layout={MinimalLayout}  />
               <BothRouter path="/home/preview" exact component={HomePreview} layout={MinimalLayout}  />
               <GuestRoute path="/login" exact component={Login} layout={LoginLayout}  />
               <UserRoute path="/dashboard" exact component={Dashboard} layout={SidebarLayout} />
               <UserRoute path="/statistik" exact component={Statistik} layout={SidebarLayout} />
          </Switch>
     )
}

export default Routes;