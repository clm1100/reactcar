import React ,{Component} from 'react';
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import Index from "./pages/home/home";
import Cart from "./pages/cart/cart";
import About from "./pages/about/about";

import Navbar from './components/navbar'
import Footer from './components/footer'
import './style/css/base.css';


class App extends Component {
    constructor(){
        super()
    }
    render(){
        return (

            <Router>
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={Index} />
                    <Route path="/about/" component={About} />
                    <Route path="/cart/" component={Cart} />
                </Switch>
                <Footer/>
            </Router>
        )
    }
}

export default App;