import './style.css';

import {AiOutlineCar} from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

import { BsShieldCheck } from "react-icons/bs";

import { BiAccessibility } from "react-icons/bi";


export default function Boxes() {
    return (
        <div>
            <div className="box">
                <h1 className='title-box'>Our commitments</h1>
                <p className='subTitle'>the list of our commitments that we strive to follow. The good being of our users is not one thing among many others, it is our priority.</p>
                <div className="content">
                    <div className="boxes">
                        <p className='icon-p'>
                            <AiOutlineCar />
                        </p>
                        <div className="bottomBox">
                            <p>Travel</p>
                        </div>
                        <p className='descr'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, dolorem.</p>
                        <a href="/bepassenger" className='a-learn-box'>Learn more <p className='icon-right'><AiOutlineRight /></p></a>
                    </div>
                    <div className="boxes">
                        <p className='icon-p'>
                            <BsShieldCheck />
                        </p>
                        <div className="bottomBox">
                            <p>Security</p>
                        </div>
                        <p className='descr'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, dolorem.</p>
                        <a href="/bepassenger" className='a-learn-box'>Learn more <p className='icon-right'><AiOutlineRight /></p></a>
                    </div>
                    <div className="boxes">
                        <p className='icon-p'>
                            <BiAccessibility />
                        </p>
                        <div className="bottomBox">
                            <p>Accessibility</p>
                        </div>
                        <p className='descr'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, dolorem.</p>
                        <a href="/bepassenger" className='a-learn-box'>Learn more <p className='icon-right'><AiOutlineRight /></p></a>
                    </div>
                </div>
            </div>
        </div>
    )
}