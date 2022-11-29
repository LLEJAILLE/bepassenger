import './style.css';
import { Fragment, useState } from 'react';

import logo from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faSlash, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

export default function Navbar() {

    const [OpenComp, setOpenComp] = useState(false);
    const [detailForm, setDetailForm] = useState(null);

    
    function buttonQuitForm() {
        setOpenComp(false);
    }

    const openCompagny = () => {
        setOpenComp(true);
        setDetailForm(
            <fragement>
                <div className='backComp' onClick={buttonQuitForm}>
                <div className='contentComp'>
                    <ul>
                        <li><a href="/" className='comp-lien'>About us</a></li>
                        <li><a href="/" className='comp-lien'>Our offering</a></li>
                        <li><a href="/" className='comp-lien'>Careers</a></li>
                        <li><a href="/" className='comp-lien'>Usage</a></li>
                    </ul>
                    <div className='cross' onClick={buttonQuitForm}><FontAwesomeIcon icon={faTimes} /></div>
                </div>
                </div>
            </fragement>
        );
    }

    return (
        <>
            <div className="nav">
                <img className='logo' src={logo} alt="logo" />
                <ul className='liste'>
                    <li className='comp'> <a className={OpenComp ? 'lien active' : 'lien'} onClick={() => openCompagny()}>Compagny <p className='iconP'><FontAwesomeIcon icon={faChevronDown}/></p></a></li>
                    <li> <a href="/" className='lien'>Security</a></li>
                    <li> <a href="/" className='lien'>Help</a></li>
                </ul>


            </div>
            {OpenComp ?
                <div>
                    {detailForm}
                </div>

                : ""}
        </>
    )
}