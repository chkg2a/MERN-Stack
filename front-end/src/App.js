import './App.css';
import Nav from "./Nav"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <div classname="App">
      <BrowserRouter>
      <Nav />
      <h1>my nigga</h1>
      </BrowserRouter>
    </div>
  );
}

export default App;
