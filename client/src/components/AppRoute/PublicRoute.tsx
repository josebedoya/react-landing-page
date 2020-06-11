import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../Layout/Layout';

interface Props {
  component: React.ComponentType<any>;
  type?: string;
  exact?: boolean;
  path: string;
}

const PublicRoute = ({
  component: Component,
  type = 'main',
  ...rest
}: Props): JSX.Element => {
  return (
    <Route
      {...rest}
      render={props => (
        <Layout type={type}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default PublicRoute;
