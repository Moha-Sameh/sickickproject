import { NavBar } from "./Navbar";
import About from "./About";
import { List } from "./Latest";
import StyledHome from "../styles/StyledHome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div style={{ paddingTop: "8vh" }}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/latest" component={List} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export const Home = () => (
  <StyledHome>
    <div>
      <ReactAudioPlayer
        src="https://soundcloud.com/sickickofficial/casanova"
        autoPlay
        controls
      />
      <h1>Welcome to Sickick un-official page</h1>
    </div>
  </StyledHome>
);

export default App;
