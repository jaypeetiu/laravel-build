import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PrivateRoute from "./components/PrivateRoute";
import MainLayout from "./layouts/main/MainLayout";

const MainPage = lazy(() => import("./pages/main/MainPage"));

const Routes = () => {
    return (
        <>
            <BrowserRouter>
                <Suspense
                    fallback={
                        <div
                            className={`w-screen h-screen flex items-center justify-center`}
                        >
                            <div>Loading...</div>
                        </div>
                    }
                >
                    <RouteSwitches />
                </Suspense>
            </BrowserRouter>
        </>
    );
}

const RouteSwitches = withRouter(({location}) => {
    return (
        <TransitionGroup>
            <CSSTransition key={location.key} classNames={`routes`} timeout={0}>
                <Switch>
                    {/* <Route
                        exact
                        path={`/`}
                        component={MainPage}
                    /> */}

                    {/* Logged Pages */}
                    <PrivateRoute 
                        exact
                        path={`/`}
                        component={MainPage}
                        layout={MainLayout}
                        title={`Landing Page`}
                    />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    );
});

export default Routes;