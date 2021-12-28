import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import MyProjects from './components/Projects.js/Projects';
import { AppDiv } from './AppStyles';
import Landing from './components/Landing/Landing';
import Technologies from './components/Technologies/Technologies';
import Contact from './components/Contact/Contact';


function App() {
  
  return (
    <AppDiv>
      <Landing/>
      <Technologies/>
      <MyProjects/>
      <Contact/>
    </AppDiv>
  );
}

export default App;
