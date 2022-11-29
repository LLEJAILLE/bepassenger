import './style.css';

import logo from './logo.png';

import { AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";

export default function Footer() {
    return (
        <div className="footer">
            <div className="left">
                <div className="block">

                    <img className='logo-footer' src={logo} alt="logo" />
                    <h3 className='subFooter'>Share your trip and save money</h3>
                    <div className="links">
                        <p className='icons-footer'>
                            <AiOutlineInstagram />
                        </p>
                        <p className='icons-footer'>
                            <FiFacebook />
                        </p>
                        <p className='icons-footer'>
                            <CiTwitter />
                        </p>
                    </div>
                </div>
            </div>
            <div className="right">
                <ul className='liste1'>
                    <h1 className='title1Footer'>Compagny</h1>
                    <li><a href="/bepassenger">About us</a></li>
                    <li><a href="/bepassenger">Our offering</a></li>
                    <li><a href="/bepassenger">Careers</a></li>
                    <li><a href="/bepassenger">Usage</a></li>
                </ul>

                <ul className='liste2'>
                    <h1 className='title1Footer'>Coming soon</h1>
                    <li><a href="/bepassenger">creation of beasenger mobile</a></li>
                    <li><a href="/bepassenger">map access</a></li>
                    <li><a href="/bepassenger">News Paper</a></li>
                </ul>
            </div>
            <div className="trait"></div>

            <p className='copy'>copyright©LucasHognon&co</p>

        </div>
    )
}