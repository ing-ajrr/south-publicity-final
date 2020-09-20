import React, {useState} from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import encabezado1 from '../../../assets/encabezado1.svg';
import pictureHome from '../../../assets/picture_home_1.svg';

import "./Header.scss";

const Header = () => {
    const [show, setShow] = useState(false);
    
    return (
        <>
            <nav className="navbar-sm">
                <Link to="/" className="navbar-sm__brand">
                    <img className="navbar-sm__brand--img" width="40" height="30" src={logo} alt="Logo"/>
                    <div className="navbar-sm__brand--title">
                        <span className="navbar-sm-brand-text__principal">South Publicity</span>
                    </div>
                </Link>
                <button className="navbar-sm__toggler" onClick={() => setShow(!show)} type="button" data-toggle="collapse" data-target="#headerNav" aria-controls="headerNav" aria-expanded="true" aria-label="Toggle navigation">
                    <MenuOutlined style={{ fontSize: '1.25rem', color: 'white' }} />
                </button>
                <div className={`navbar-sm__collapse${show ? ' show' : ''}`} id="headerNav">
                    <ul className="navbar-sm__collapse--nav ml-auto">
                        <li className="navbar-sm-collapse-nav__item">
                            <a className="navbar-sm-collapse-nav__item--link" href="#ingreso">Ingreso</a>
                        </li>
                        <li className="navbar-sm-collapse-nav__item">
                            <a className="navbar-sm-collapse-nav__item--link" href="#suscripcion">Suscripción</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav className="navbar-md">
                <div className="navbar-md__nav">
                    <ul className="navbar-md__nav--box ml-auto">
                        <li className="navbar-md-nav__item">
                            <a className="navbar-md-nav__item--link" href="#ingreso">Ingreso</a>
                        </li>
                        <li className="navbar-md-nav__item">
                            <a className="navbar-md-nav__item--link" href="#suscripcion">Suscripción</a>
                        </li>
                    </ul>
                </div>
                <div className="encabezado1">
                    <img src={encabezado1} alt="Imagen de cabercera" className="encabezado1__img"/>
                </div>
                <Link to="/" className="navbar-md__brand">
                    <img className="navbar-md__brand--img" src={logo} alt="Logo"/>
                </Link>
                <div className="navbar-md__title">
                    <h1>South Publicity</h1>
                </div>
            </nav>
            <div className="picture-1">
                <img src={pictureHome} alt="Imagen de cabecera" className="picture-1__img"/>
            </div>
        </>
    );
}

export default Header;