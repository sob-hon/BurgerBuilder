import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'

class Checkout extends Component {
    state = { 
        ingredients: null,
        totalPrice: 0,
    }

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for(let param of query) {
            if(param[0] === 'price') {
                price = Number(param[1]);
            } else {
                ingredients[param[0]] = Number(param[1]);
            }
        }
        this.setState(
            {
                ingredients: ingredients,
                totalPrice: price
            });
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() { 
        return (
            <div>
                <CheckoutSummary 
                ingredients={this.state.ingredients}
                checkoutCancelled={this.checkoutCancelledHandler}
                checkoutContinued={this.checkoutContinuedHandler}
                />
                <Route path={this.props.match.path + '/contact-data'} render={(props) => (
                    <ContactData ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} />
                )} />
            </div> 
         );
    }
}
 
export default Checkout;