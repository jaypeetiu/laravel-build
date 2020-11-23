import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
                    <Route
                        exact
                        path={`/`}
                        component={MainPage}
                    />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    );
});

export default Routes;