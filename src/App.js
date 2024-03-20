import { Button } from "bootstrap";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Upcoming } from "./components/Upcoming";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Upcoming />
    </div>
  );
}

export default App;
