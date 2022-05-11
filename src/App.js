import "./App.css";
import "./reset.css";
import NavigationBar from "./components/NavigationBar";
import SideBar from "./components/SideBar";
import Tilelist from "./components/Tilelist";
import TitleBar from "./components/TitleBar";
import { useEffect, useState } from "react";
import { fetchJson } from "./methods/jsonMethods";

function App() {
  const [games, setGames] = useState({ result: { results: [] } });

  useEffect(() => {
    fetchJson("GET", "https://api.rawg.io/api/games", setGames);
  }, []);

  return (
    <div className="App">
      <div className="sideBar">
        <SideBar />
      </div>
      <div className="main">
        <div className="nav">
          <NavigationBar title="Games" />
        </div>
        <div>
          <div className="content">
            <TitleBar title="Games" />
            <Tilelist parent={games} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
