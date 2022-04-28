import React from 'react';
import Logo from '../../assets/img/Logo.png';
//import ButtonLink from './components/ButtonLink';
import './Menu.css';
import Button from '../Button';
 
function Menu() {
    return (
    <nav className="Menu">
        <a href="/">
           <img class="Logo" src={Logo} alt="SamFLix Logo"/>
        </a>

        <Button className="ButtonLink" href='/'>
           Novo Video
        </Button>
    </nav>
    );
}

export default Menu;
