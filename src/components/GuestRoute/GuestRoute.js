import React from 'react';
import { Route } from 'react-router-dom';

const GuestRoute = props => {
     const { layout: Layout, component: Component, ...rest } = props;

     return(
          <Route 
               { ...rest }
               render={matchProps => (
                    <Layout>
                         <Component { ...matchProps} />
                    </Layout>
               )}
          />
     )
}

export default GuestRoute;