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
    </div>
  );
}

export default App;
