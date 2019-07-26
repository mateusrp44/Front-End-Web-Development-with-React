import React, { Component } from 'react';
import { DISHES } from '../shared/dishes';

import Header from './headercomponent';
import Menu  from './menucomponent';
import DishDetail  from './dishdetailcomponent';
import Footer from './footercomponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {
        return (
            <div>
                <Header />
                    <Menu dishes={ this.state.dishes } onClick={ (dishId) => this.onDishSelect(dishId) } />
                    <div className="container">
                        <DishDetail dish={ this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0] } />
                    </div>
                    <Footer />
            </div>
        );
    }
}

export default Main;
