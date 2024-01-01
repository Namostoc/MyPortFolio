// import logo from './logo.svg';
import './App.css';
import Home from './component/home';
import Layout from './component/layout'
import {Route,Routes} from 'react-router-dom'
import About from './component/about';
import Contact from './component/contact';
import Skill from './component/skills';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/skills' element={<Skill />} />
      </Route>
    </Routes>
  );
}

export default App;
