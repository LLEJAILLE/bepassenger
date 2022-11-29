import Navbar from './components/navbar/navbar';
import HeroBanner from './components/herobanner/heroBanner';
import Discover from './components/discover/discover';
import Boxes from './components/boxes/boxes';
import Footer from './components/footer/foter';

import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './components/home/home';

function App() {

  

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/bepassenger" element={<Home />}>
        </Route>
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
