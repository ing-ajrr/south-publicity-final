import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col} from 'antd';
import apps from '../../../../assets/apps.svg';
import multimedia from '../../../../assets/multimedia.svg';
import rrss from '../../../../assets/rrss.svg';
import consulting from '../../../../assets/consulting.svg';
import stadistics from '../../../../assets/stadistics.svg';

import './CarouselItem.scss';

const CarouselItem = () => (
    <div className="carousel-item">
        <div className="carousel-item__title">
            <h2>Nuestros Productos y Servicios</h2>
        </div>
        <Row className="carousel-item__list">
            <Col span={8} md={4}>
                <Item url="/" image={apps} title="Desarrollo de Apps Y Páginas" />            
            </Col>
            <Col span={8} md={4}>
                <Item url="/" image={multimedia} title="Producción Audio Visual" />            
            </Col>
            <Col span={8} md={4}>
                <Item url="/" image={rrss} title="Campañas de publicidad en RRSS" />            
            </Col>
            <Col span={8} md={4}>
                <Item url="/" image={consulting} title="Asesorías en Marketing, Ventas y Administración" />            
            </Col>
            <Col span={8} md={4}>
                <Item url="/" image={stadistics} title="Estudios de resultados y bases de Datos" />
            </Col>            
        </Row>
    </div>
);

const Item = ({image, title}) => (
    <Link to="/" className="item">
        <img src={image} alt={title} />
        <p>{title}</p>
    </Link>
);
export default CarouselItem;