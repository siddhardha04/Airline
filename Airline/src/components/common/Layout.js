import React, { lazy, Suspense } from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import Homepage from "../pages/Homepage";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

const signinpage = lazy(() => import("../pages/SignInPage"));
const signuppage = lazy(() => import("../pages/SignUpPage"));
const flightspage = lazy(() => import("../pages/FlightsPage"));
const flightinfopage = lazy(() => import("../pages/FlightInfoPage"));
const addpassenger = lazy(() => import("../Feature/AddPassenger"));
const passengercheckin = lazy(() => import("../Feature/PassengerCheckIn"));
const updatepassenger = lazy(() => import("../Feature/UpdatePassenger"));
const pagenotfound = lazy(() => import("../pages/PageNotFound"));

function Layout() {
  return (
    <main className="layout-container">
      <Suspense
        fallback={
          <div
            style={{
              position: "absolute",
              left: "50%",
              right: "50%",
              fontSize: "25px"
            }}
          >
            Loading...
          </div>
        }
      >
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/signin" component={signinpage}></Route>
          <Route exact path="/signup" component={signuppage}></Route>
          <Route exact path="/flights" component={flightspage}></Route>
          <Route exact path="/flight/:id" component={flightinfopage}></Route>
          <Route
            exact
            path="/admin/addpassenger/:id"
            component={addpassenger}
          ></Route>
          <Route
            exact
            path="/staff/checkin/:id"
            component={passengercheckin}
          ></Route>
          <Route
            exact
            path="/admin/:id/:id"
            component={updatepassenger}
          ></Route>
          <Route component={pagenotfound}></Route>
        </Switch>
      </Suspense>
    </main>
  );
}

Layout.propTypes = {
  user: PropTypes.object,
  history: PropTypes.object
};

function mapPropstoState(state) {
  return { user: state.user };
}

export default withRouter(connect(mapPropstoState, null)(Layout));
