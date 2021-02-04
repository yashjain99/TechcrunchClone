import React from "react";
import { Switch, Route } from "react-router-dom";
import FooterPage from "../Pages/Footer/Components/FooterPage";
import Login from "../Pages/Login/Components/Login";
import SideBar from "../Pages/SideBar/Components/SideBar";
import { Home } from "../Pages/Homepage/Components/Home";

import EventsPage from "../Pages/Events/Components/EventsPage";

function Routes() {
  return (
    <>
      <SideBar />
      {/* <Route exact path="/" render={(props) => <SideBar {...props} />} /> */}
      <div style={{ marginLeft: "250px", marginRight: "300px" }}>
        <Switch>
          <Route exact path="/login" render={(props) => <Login {...props} />} />
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route
            exact
            path="/events/1"
            render={(props) => <EventsPage {...props} />}
          />

          <Route
            render={() => (
              <h2 style={{ textAlign: "center" }}>Page not found...</h2>
            )}
          />
        </Switch>
      </div>
      {/* Footer */}
    </>
  );
}

export default Routes;
