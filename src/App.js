import React from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import {Route, Switch} from 'react-router-dom'
import Orders from './containers/Orders/Orders'

const App = () => {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/order" component={Order} /> {/* <Checkout /> */}
          <Route path="/" exact component={BurgerBuilder} />  {/* <BurgerBuilder /> */}
        </Switch>
      </Layout>
    </div>
  );
}

export default App;