import React from 'react';
import { Route, Switch } from 'react-router-dom';
import authoRize from './auth/authorize/authorize'
import notFound from './auth/404/notFound'
import AccHandling from './Pages/Admin/AccountHandling/AccHandling';
import ProductManagement from './Pages/Admin/AdminProducts/product'
import Card from './Pages/User/Card/card'
import Products from './Pages/User/Products/Products'
import Cookies from 'js-cookie';

const PageRouter = () => {
  var auth = JSON.parse(Cookies.get('mainData'))
  return <div>
    {auth[0].auth[0].option === "Admin" ?
      <span>
        <Switch>
          <Route exact path={`/Admin/AccountHandling`} component={AccHandling} />
          <Route exact path={`/Admin/ProductManagement`} component={ProductManagement} />
          <Route exact path={`/User`} component={authoRize} />
          <Route component={notFound} />
        </Switch></span> :
      <span>
        <Switch>
          <Route exact path={`/User/Card`} component={Card} />
          <Route exact path={`/User/Products`} component={Products} />
          <Route exact path={`/Admin`} component={authoRize} />
          <Route component={notFound} />
        </Switch>
      </span>
    }
  </div>
};

export default PageRouter;