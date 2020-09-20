import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';

import base from '../../../assets/base.svg';

import './RegisterSection.scss';

const RegisterSection = () => {
  return (
    <section className="register-section">
      <div className="register-section__picture">
        <img src={base} alt="Imagen de cabecera" className="register-section__picture--img"/>
      </div>
      <div className="register-section__container">
            <div className="register-section__container--info">
              <Row>
                <Col span={24} md={18} className="container-info__description">
                  <h2>Si te interesa</h2>
                  <p>
                      Descarga Nuestro Catalogo GRATIS 
                      y SUSCRIBETE para estar al tanto de nuestras ofertas
                      y regalos.
                  </p>
                </Col>
                <Col span={24} md={6} className="container-info__button">
                    <Link to="/register" className="btn btn-success">
                        OBTENER
                    </Link>
                </Col>
              </Row>
            </div>
        </div>
    </section>
  );
};

export default RegisterSection;