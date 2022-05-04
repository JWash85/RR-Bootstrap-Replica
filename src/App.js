import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import './App.css';
import TopBar from './component/TopBar';
import BackgroundImage from "./component/BackgroundImage";
import StoreListing from "./component/StoreListing";

function App() {
  return (
    <div className="App">
      <TopBar />
      <BackgroundImage />
      <StoreListing />
      
    </div>
  );
}

export default App;
