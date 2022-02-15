import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Comment from "./components/Comment";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Comment/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
