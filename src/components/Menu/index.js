import React from 'react';
import Logo from '../../assets/img/Logo.png';
import { Link } from 'react-router-dom';
//import ButtonLink from './components/ButtonLink';
import './Menu.css';
import Button from '../Button';
 

function Menu() {
    return (
    <nav className="Menu">
        <Link to="/">
           <img class="Logo" src={Logo} alt="SamFLix Logo"/>
        </Link>

        <Button as={Link} className="ButtonLink" to='/cadastro/video'>
           Novo Video
        </Button>
    </nav>
    );
}

export default Menu;
