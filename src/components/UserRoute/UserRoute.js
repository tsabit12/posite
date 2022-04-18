import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';

const UserRoute = props => {
     const { layout: Layout, component: Component, isAuthenticated, ...rest } = props;

     return(
          <Route 
               { ...rest }
               render={matchProps => (
                    <Layout>
                         { isAuthenticated ? <Component { ...matchProps} /> : <Redirect to={'/login'} /> }
                    </Layout>
               )}
          />
     )
}

function mapStateToProps(state){
     return {
          isAuthenticated: !!state.session.email
     }
}

export default connect(mapStateToProps, null)(UserRoute);