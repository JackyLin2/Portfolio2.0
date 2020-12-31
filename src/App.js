import './App.css';
import Header from './components/Header'
import About from './components/About'
import NavBar from './components/NavBar'
import Project from './components/Project'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <NavBar/>
        <About/>
        <Project/>
        <Experience/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
