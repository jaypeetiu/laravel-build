import React, { Suspense } from "react";
import { Route, Redirect } from "react-router-dom";
import { isUserLoggedIn, isAdminLoggedIn } from "../services/auth";

const PrivateRoute = ({
  component: Component,
  layout: Layout,
  isAdmin = false,
  title = "",
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        // if (isAdmin && !isAdminLoggedIn()) {
        //   return <Redirect to={`/admin/login`} />;
        // } else if (!isAdmin && !isUserLoggedIn()) {
        //   return <Redirect to={`/login`} />;
        // } else {
          return (
            <Suspense>
              <Layout title={title}>
                <Suspense>
                  <Component {...props} />
                </Suspense>
              </Layout>
            </Suspense>
          );
        }
      }
    />
  );
};

export default PrivateRoute;
