import 'bootstrap/dist/css/bootstrap.min.css';
import MyProjects from './containers/Projects.js/Projects';
import { AppDiv } from './AppStyles';
import Landing from './components/Landing/Landing';
import Technologies from './containers/Technologies/Technologies';
import Contact from './containers/Contact/Contact';


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
