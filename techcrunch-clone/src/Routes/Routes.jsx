import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../Pages/Login/components/Login";
import { Home } from "../Pages/Homepage/Components/Home";
import { StartupNews } from "../Pages/StartupNews/Components/StartupNews";
import { News } from "../Pages/News/Components/News";
import { Events } from "../Pages/EventsPage/Components/Events";
import TcList from "../Pages/TcList/Component/TcList";
import { EventsPage } from "../Pages/Events/Components/EventsPage";
import StartupBattleField from "../Pages/Battlefield/Components/StartupBattleField";
import { Newsletters } from "../Pages/NewsLetters/Components/NewsLetters";
import Advertise from "../Pages/Advertise/Components/Advertise";
import { SearchResultPage } from "../Pages/SearchBar/Components/SearchResultPage";
import Leaderboard from "../Pages/Battlefield/Components/Leaderboard";
import AccountDetailsPage from "../Pages/AccountDetails/Components/AccountDetailsPage";
import SponsorPage from "../Pages/Sponsor/Components/SponsorPage";
import ResponsePage from "../Pages/Sponsor/Components/ResponsePage";
import PaymentPage from "../Pages/Payment/Components/PaymentPage";

function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/login" render={(props) => <Login {...props} />} />
        <Route
          exact
          path="/startup-news"
          render={(props) => <StartupNews {...props} />}
        />
        <Route exact path="/news/:id" render={(props) => <News {...props} />} />
        <Route
          exact
          path="/thetcList"
          render={(props) => <TcList {...props} />}
        />

        <Route
          exact
          path="/startup-battlefield"
          render={(props) => <StartupBattleField {...props} />}
        />
        <Route
          exact
          path="/search/:id"
          render={(props) => <SearchResultPage {...props} />}
        />
        <Route exact path="/events" render={(props) => <Events {...props} />} />
        <Route
          exact
          path="/events/:id"
          render={(props) => <EventsPage {...props} />}
        />
        <Route
          exact
          path="/thetcList"
          render={(props) => <TcList {...props} />}
        />
        <Route
          exact
          path="/startup-battlefield"
          render={(props) => <StartupBattleField {...props} />}
        />
        <Route
          exact
          path="/newsLetters"
          render={(props) => <Newsletters {...props} />}
        />
        <Route
          exact
          path="/advertise"
          render={(props) => <Advertise {...props} />}
        />
        <Route
          exact
          path="/startup-battlefield/leaderboard"
          render={(props) => <Leaderboard {...props} />}
        />
        <Route
          exact
          path="/my-account/:id"
          render={(props) => <AccountDetailsPage {...props} />}
        />
        <Route
          exact
          path="/sponsor"
          render={(props) => <SponsorPage {...props} />}
        />
        <Route
          exact
          path="/response"
          render={(props) => <ResponsePage {...props} />}
        />
        <Route
          exact
          path="/payment/:id/:price"
          render={(props) => <PaymentPage {...props} />}
        />
        <Route
          render={() => (
            <h2 style={{ textAlign: "center" }}>Page not found...</h2>
          )}
        />
      </Switch>
    </>
  );
}
export default Routes;
