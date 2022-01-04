import 'bootstrap/dist/css/bootstrap.min.css';
import MyProjects from './containers/Projects.js/Projects';
import { AppDiv } from './AppStyles';
import Landing from './containers/Landing/Landing';
import Technologies from './containers/Technologies/Technologies';
import Contact from './containers/Contact/Contact';
import About from './containers/About/About';
import image from './utils/imgs/aboutImg.jpg'

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
