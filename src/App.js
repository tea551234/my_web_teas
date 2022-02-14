import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Sidebar from './components/Sidebar';
import Nav from './components/Nav';
import Footer from './components/Footer';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Menu/>
        <Header/>
        <Sidebar/>
        <Nav/>
        <Footer/>


      </header>
    </div>
  );
}

export default App;
