import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Layout} from 'antd';
import HeaderComponent from '../components/Web/Header';
import FooterComponent from '../components/Web/Footer';

const LayoutWeb = ({routes}) => {
  const {Header, Content, Footer} = Layout;
  return (
    <Layout>
        <Header>
          <HeaderComponent/>
        </Header>
        <Content>
          <LoadRoutes routes={routes} />
        </Content>
        <Footer>
          <FooterComponent/>
        </Footer>
      </Layout>
  );
};

function LoadRoutes({routes}){
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}

export default LayoutWeb;