import React from 'react';
import { Carousel } from 'antd';
import RegisterSection from '../../components/Web/RegisterSection';

import CarouselItem from '../../components/Web/Carousel/CarouselItem';

import "./Home.scss";

const Home = () => {
  return (
    <>
      <section className="content-section-main">     
        <div className="content-section-main__opacity"></div>
        <Carousel autoplay>
          <div>
            <CarouselItem />
          </div>          
        </Carousel>
        <RegisterSection/>
      </section>
    </>
  );
};

export default Home;