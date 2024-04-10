
import './App.css';
import About from './components/About'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className='App'>
    <Navbar/>
    <Home/>
    <About/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
