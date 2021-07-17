import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from "../../../axios-orders";
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = { 
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        },
        loading: false,
    }

    orderHandler = () => {
        this.setState({
            loading: true,
        });
        const order = {
            ingredients: this.props.ingredients,
            totalPrice: this.props.totalPrice,
            costumer: {
                name: "Sobhan",
                address: {
                street: "test street",
                zipcode: "123654",
                country: "Iran",
                },
                email: "test@example.com",
            },
            deliveryMethod: "fastest",
        };
        axios
        .post("/orders.json", order)
        .then((response) => {
            this.setState({
            loading: false,
            });
            this.props.history.push('/')
        })
        .catch((error) => {
            this.setState({
            loading: false,
            });
        });
    }

    render() { 
        let form = (
            <form>
                <input type="text" name="name" placeholder="Your Name" />
                <input type="email" name="email" placeholder="Your Mail" />
                <input type="text" name="street" placeholder="Street" />
                <input type="text" name="postal" placeholder="Postal Code" />
                <Button clicked={this.orderHandler} btnType= "Success">ORDER</Button>
            </form>
        );
        
        if(this.state.loading) {
            form = <Spinner />;
        }

        return ( 
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                {form}
            </div>
         );
    }
}
 
export default ContactData;