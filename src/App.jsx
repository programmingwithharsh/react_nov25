import React from "react";
import AddProduct from "./AddProduct";
import Welcome from "./Welcome";
import ProductList from "./ProductList";
import Title from "./Title";
import Star from "./Star";

export default class App extends React.Component { // Exporting a component
    constructor(props) { // component lifecycle
        super(props);
        console.log('Constructor 1');
        this.state = {
            username: "Sumit",
            address: "Mumbai"
        }
        console.log(this.props);
    }
    componentDidMount() {
        console.log('ComponentDidMount 3');
        /*
            This is the best place for calling the APIs, it calls after render

            APIs calls in React 
                Javascript fetch method
                Axios module 
        */
    }

    updateUsername = () => {
        this.setState({
            username: "Hardika"
        })
    }

    render() { // lifecycle
        console.log('Render 2');
        console.log(this.state);
        return <div>
            <div>This is App class Component</div>
            <div><b>State username is {this.state.username}</b></div>
            <button onClick={this.updateUsername}>Update username state</button>
            <AddProduct />
            <Welcome title="Welcome" user="Devender" employeeCode="200" />
            <ProductList message="Product List" />
            <Title />
            <Star />
        </div>
    }
}