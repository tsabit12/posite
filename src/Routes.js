import { Redirect, Switch } from 'react-router-dom';
import { GuestRoute } from './components';
import { LoginLayout, MinimalLayout } from './layout';
import { Home, HomeHero, HomePreview, Login } from './pages';

const Routes = () => {
     return(
          <Switch>
               <Redirect from="/" to="/login" exact />
               <GuestRoute path="/home" exact component={Home} layout={MinimalLayout}  />
               <GuestRoute path="/home/hero" exact component={HomeHero} layout={MinimalLayout}  />
               <GuestRoute path="/home/preview" exact component={HomePreview} layout={MinimalLayout}  />
               <GuestRoute path="/login" exact component={Login} layout={LoginLayout}  />
          </Switch>
     )
}

export default Routes;