import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import AboutMe from './components/About/About';
import Footer from './components/Footer/Footer';
import MyProjects from './components/Projects.js/Projects';
import Studies from './components/Studies/Studies';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <AboutMe/>
      <MyProjects/>
      <Studies/>

      <Footer/>
    </div>
  );
}

export default App;
