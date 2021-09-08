import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import Layout from '../../layout';
import HomePage from '../HomePage'

function App() {
  const pages = [
    {
      id: 'home-route',
      urlLink: '/',
      component: HomePage
    },
  ];
  const createRoutes = () => {
    let routes = pages.map(page => {
      return(
        <Route 
          exact 
          path={page.urlLink} 
          component={page.component}
          key={page.id}
        />
      );
    });
    return routes;
  }
  return (
    <BrowserRouter>
      <Layout>
        {createRoutes()}
      </Layout>
    </BrowserRouter>
  );
}
export default App;
