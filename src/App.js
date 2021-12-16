import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import MyProjects from './components/Projects.js/Projects';
import Studies from './components/Studies/Studies';
import { AppDiv } from './AppStyles';
import Landing from './components/Landing/Landing';

function App() {
  return (
    <AppDiv>
      <Landing/>
      <MyProjects/>
      <Studies/>
      <Footer/>
    </AppDiv>
  );
}

export default App;
