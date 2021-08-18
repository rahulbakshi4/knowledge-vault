import './App.css';
import Nav from './components/Nav'
import Category from './components/Category';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
    <Nav/>
    <Header/>
    <Category/>
    <Footer/>
    </div>
  );
}

export default App;
