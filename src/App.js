import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../src/utils/imgs/aboutImg.jpg'
import MyProjects from './containers/Projects.js/Projects';
import { AppDiv } from './AppStyles';
import Landing from './containers/Landing/Landing';
import Technologies from './containers/Technologies/Technologies';
import Contact from './containers/Contact/Contact';
import About from './containers/About/About';


function App() {
  
  return (
    <AppDiv img={image}>
      <Landing/>
      <About/>
      <Technologies/>
      <MyProjects/>
      <Contact/>
    </AppDiv>
  );
}

export default App;
