import React from 'react';

import './Plantilla1.scss';

const Plantilla1 = () => {
  return (
    <>
      <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-main">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand">Landing Page 1</a>
          </div>
          <div class="collapse navbar-collapse" id="navbar-collapse-main">
            <ul class="nav navbar-nav navbar-right">
              <li><a href="#" class="active">Ingreso</a></li>
              <li><a href="#">Suscripción</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <div id="home">
        <div class="landing-text">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3">
            <br />
          </div>
          <div class="box col-sm-6 col-md-6 col-lg-3 col-xl-3">
            <h1>Titulo del producto/marca</h1>
            <h4>Descripcion del producto para atraer al cliente y motivarlo a comprar el producto.</h4>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3">
            <h3>Contrata ahora:</h3>
            <input type="text" placeholder="Nombre" />
            <br />
            <input type="text" placeholder="Correo electrónico" />
            <br />
            <input type="text" placeholder="Teléfono" />
            <br />
            <br />
            <a href="#" class="btn btn-default btn-md">Suscripción</a>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3">
          <br />
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />	
        </div>
      </div>

      <footer class="container-fluid text-center">
        <div class="row">
          <div class="col-sm-4">
            <h3>Contáctanos</h3>
            <br />
            <h4>Dirección y teléfono aqui</h4>
          </div>
          <div class="col-sm-4">
            <h3>Encuentranos en:</h3>
            <br />
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-google"></a>
            <a href="#" class="fa fa-instagram"></a>
            <a href="#" class="fa fa-youtube"></a>
          </div>
          <div class="col-sm-4">
            <h3>Logo aqui</h3>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Plantilla1;