// import logo from './logo.svg';
import './App.css';
import Home from './component/home';
import Layout from './component/layout'
import {Route,Routes} from 'react-router-dom'
import About from './component/about';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
