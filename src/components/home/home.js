import Navbar from '../navbar/navbar';
import HeroBanner from '../herobanner/heroBanner';
import Discover from '../discover/discover';
import Boxes from '../boxes/boxes';
import Footer from '../footer/foter';


export default function Home() {
    return (
        <div>
            <Navbar />
            <HeroBanner />
            <Discover />
            <Boxes />
            <Footer />
        </div>
    )
}