import logo from "./logo.svg";
import "./App.css";
import SideBar from "./Pages/SideBar/Components/SideBar";
import EventsPage from "./Pages/Events/Components/EventsPage";

function App() {
  return (
    <div className="App">
      <SideBar />
      <div style={{ marginLeft: "250px" }}>
        <EventsPage />
      </div>
    </div>
  );
}

export default App;
