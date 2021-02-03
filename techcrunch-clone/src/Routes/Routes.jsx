import React from "react";
import { Switch, Route } from "react-router-dom";
import FooterPage from "../Pages/Footer/Components/FooterPage";
import Login from "../Pages/Login/Components/Login";
import SideBar from "../Pages/SideBar/Components/SideBar";
import { Home } from "../Pages/Homepage/Components/Home";

function Routes() {
  return (
    <>
      <Route exact path="/" render={(props) => <SideBar {...props} />} />
      <Switch>
        <Route exact path="/login" render={(props) => <Login {...props} />} />
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route
          render={() => (
            <h2 style={{ textAlign: "center" }}>Page not found...</h2>
          )}
        />
      </Switch>
      {/* Footer */}
    </>
  );
}

export default Routes;
