import React from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import {Route, Switch} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} /> {/* <Checkout /> */}
          <Route path="/" exact component={BurgerBuilder} />  {/* <BurgerBuilder /> */}
        </Switch>
      </Layout>
    </div>
  );
}

export default App;