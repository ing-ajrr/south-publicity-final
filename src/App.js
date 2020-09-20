import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import AuthProvider from './providers/AuthProvider';

import "antd/dist/antd.css"
import "./App.scss";

import routes from './config/routes';

function App() {
  return (
    <>
    {/*<AuthProvider>*/}
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <RouterWithSubRoutes key={index} {...route} />
          ))}
        </Switch>
      </Router>
    {/*</AuthProvider>*/}
    </>
  );
}

function RouterWithSubRoutes (route){
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => {
        return <route.component routes={route.routes} {...props} />;
      }}
    />
  )
}
export default App;