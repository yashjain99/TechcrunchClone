import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../Pages/Login/Components/Login";
import { Home } from "../Pages/Homepage/Components/Home";
import { StartupNews } from "../Pages/StartupNews/Components/StartupNews";
import { News } from "../Pages/News/Components/News";
import {Events} from '../Pages/EventsPage/Components/Events'
import TcList from "../Pages/TcList/Component/TcList";
import EventsPage from "../Pages/Events/Components/EventsPage";
import StartupBattleField from "../Pages/Battlefield/Components/StartupBattleField";
import Advertise from "../Pages/Advertise/Components/Advertise"
import { SearchResultPage } from "../Pages/SearchBar/Components/SearchResultPage";
import Leaderboard from "../Pages/Battlefield/Components/Leaderboard";

function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/login" render={(props) => <Login {...props} />} />
        <Route exact path="/startup-news" render={(props) => <StartupNews {...props} />} />
        <Route exact path="/news/:id" render={(props) => <News {...props} />} />
        <Route exact path="/thetcList" render={(props) => <TcList {...props} />} />
        <Route exact path="/events/1" render={(props) => <EventsPage {...props} />}/>
        <Route exact path="/startup-battlefield" render={(props)=><StartupBattleField {...props}/>} />
        <Route exact path="/search/:id" render={(props) => <SearchResultPage {...props} />} />
        <Route exact path="/events" render={(props) => <Events {...props} />} />
        <Route exact path="/events/1" render={(props) => <EventsPage {...props} />} />
        <Route exact path="/thetcList" render={(props)=><TcList {...props}/>} />
        <Route exact path="/startup-battlefield" render={(props)=><StartupBattleField {...props}/>} />
        <Route exact path="/advertise" render={(props)=><Advertise {...props}/>} />
        <Route exact path="/startup-battlefield/leaderboard" render={(props)=><Leaderboard {...props}/>} />
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