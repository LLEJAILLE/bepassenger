import Navbar from './components/navbar/navbar';
import HeroBanner from './components/herobanner/heroBanner';
import Discover from './components/discover/discover';
import Boxes from './components/boxes/boxes';
import Footer from './components/footer/foter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroBanner />
      <Discover />
      <Boxes />
      <Footer />
    </div>
  );
}

export default App;
