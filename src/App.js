<<<<<<< HEAD
import logo from './logo_ifro.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank">
          Learn React
        </a>
      </header>
=======
import Navbar from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import MyCard from "./components/MyCard";

function App() {
  return (
    <div>
      <Navbar />
      <MyCard nome="teste" />
      <MyCard nome="Card 2"/>
      <MyCard nome="Card 3"/>
      <MyCard />
>>>>>>> 5dc061f9666363b4a7eea9c8331d28d6343fbae5
    </div>
  );
}

export default App;
