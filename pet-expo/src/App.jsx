import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Dogs from './components/Dogs';
import Cats from './components/Cats';
import Birds from './components/Birds';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/dogs' element={<Dogs/>}/>
      <Route path='/cats' element={<Cats/>}/>
      <Route path='/birds' element={<Birds/>}/>
    </Routes>
    </Router>
  )
}

export default App
