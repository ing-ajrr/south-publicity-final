import React from 'react';
import { Row, Col } from 'antd';
import { Input } from 'antd';
import {RightOutlined} from '@ant-design/icons';

import twitter from '../../../assets/twitter.svg';
import facebook from '../../../assets/facebook.svg';
import whatsapp from '../../../assets/whatsapp.svg';
import instagram from '../../../assets/instagram.svg';

import './Footer.scss';

const { Search } = Input;

const Footer = () => {
  return (
    <footer className="footer">
      <Row className="footer__row">
        <Col className="footer__row--col" span={24} md={6}>
          <ul className="col-list">
            <li>
              <h3>Sobre Nosotros</h3>
            </li>
            <li>
              <h2>Ubicacion:</h2>
              <p>Chillán, Chile</p>
            </li>
            <li>
              <h2>Soporte:</h2>
              <p>southpublicity@support.com</p>
            </li>
            <li>
              <h2>Telefono:</h2>
              <p>+56 9 4xxxxxx</p>
            </li>
          </ul>
        </Col>
        <Col className="footer__row--col" span={24} md={8}>
          <ul className="col-list">
            <li>
              <h3>Ultimas Actualizaciones</h3>
            </li>
            <li>
              <h2>01/01/2020</h2>
              <p>correccion de textos</p>
            </li>
            <li>
              <h2>01/12/2019</h2>
              <p>actualizacion de ofertas</p>
            </li>
            <li>
              <h2>01/11/2019</h2>
              <p>nuevos cursos</p>
            </li>    
          </ul>
        </Col>
        <Col className="footer__row--col" span={24} md={6}>
        <ul className="col-list">
            <li>
              <h3>Contactanos</h3>
            </li>
            <li>
              <div className="rrss-list">
                <img src={facebook} alt="Icono de Facebook" />
                <img src={twitter} alt="Icono de Twitter" />
                <img src={instagram} alt="Icono de Instagram" />
                <img src={whatsapp} alt="Icono de Whatsapp" />
              </div>
            </li>
            <li className="input">
              <Search 
                placeholder="Envianos tu correo" 
                onSearch={value => console.log(value)} 
                enterButton={<RightOutlined />} />
            </li>
          </ul>
        </Col>
      </Row>

    </footer>
  );
};

export default Footer;