import React from "react";
import { Route } from "react-router-dom";

const BothRouter = (props) => {
  // eslint-disable-next-line react/prop-types
  const { layout: Layout, component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

export default BothRouter;
