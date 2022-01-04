import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../src/utils/imgs/aboutImg.jpg'
import MyProjects from './containers/Projects.js/Projects';
import { AppDiv, Loading } from './AppStyles';
import Landing from './containers/Landing/Landing';
import Technologies from './containers/Technologies/Technologies';
import Contact from './containers/Contact/Contact';
import About from './containers/About/About';
import { useState } from 'react';
import Icon from './components/Icon/Icon';
import { useEffect } from 'react';


function App() {
  const [loading, setLoading] = useState(false)
  useEffect(()=> {
    setTimeout(()=>setLoading(true), 3000)
  },[])
  console.log(loading)
  return (
    loading ? <>
      <AppDiv img={image}>
      <Landing/>
      <About/>
      <Technologies/>
      <MyProjects/>
      <Contact/>
    </AppDiv>
    </> : 
    <Loading>
      <Icon/>
    </Loading>
  );
}

export default App;
