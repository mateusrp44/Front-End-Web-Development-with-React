import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { DISHES } from '../shared/dishes';
import Home from './homecomponent';
import Header from './headercomponent';
import Menu from './menucomponent';
import Footer from './footercomponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        }
    }

    render() {
        const HomePage = () => {
            return (
                <Home />
            );
        }
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={ HomePage } />
                    <Route exact path="/menu" component={() => <Menu dishes={ this.state.dishes } />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;
