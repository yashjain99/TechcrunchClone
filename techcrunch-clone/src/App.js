<<<<<<< HEAD
import logo from "./logo.svg";
import "./App.css";
import SideBar from "./Pages/SideBar/Components/SideBar";
import EventsPage from "./Pages/Events/Components/EventsPage";

import "./App.css";
import Login from "./Pages/Login/components/Login";

function App() {
  return (
    <div className="App">
      <SideBar />

      <Login />
=======
import { Home } from "./Pages/Homepage/Components/Home";
import SideBar from "./Pages/SideBar/Components/SideBar";
import Login from './Pages/Login/Components/Login';
import FooterPage from "./Pages/Footer/Components/FooterPage";

function App() {
  return (
    <div>

      {/* <SideBar />
      <Home /> */}

    
    <Login/>
    {/* <FooterPage/> */}

>>>>>>> a39f8dbe290cf6468ca46c82a5533bd273fcb974
    </div>
  );
}

export default App;