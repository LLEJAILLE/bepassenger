import './style.css';
import banner from './town.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTaxi, faCompactDisc, faMap } from '@fortawesome/free-solid-svg-icons';

export default function HeroBanner() {

    return (
        <div>
            <div className="banner">
                <h1 className='tittle-h1'>Share your trip and save money</h1>
                <a className='reservation' href="/">Do a reservation</a>
            </div>
        </div>
    );
}