import { Redirect, Switch } from 'react-router-dom';
import { GuestRoute } from './components';
import { MinimalLayout } from './layout';
import { Home, HomeHero } from './pages';

const Routes = () => {
     return(
          <Switch>
               <Redirect from="/" to="/home" exact />
               <GuestRoute path="/home" exact component={Home} layout={MinimalLayout}  />
               <GuestRoute path="/home/hero" exact component={HomeHero} layout={MinimalLayout}  />
          </Switch>
     )
}

export default Routes;