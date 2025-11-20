import React from "react";
import AddProduct from "./AddProduct";
import Welcome from "./Welcome";
import ProductList from "./ProductList";
import Product from "./Product";
import Title from "./Title";
import Star from "./Star";

export default class App extends React.Component { // Exporting a component
    constructor() { // component lifecycle
        super();
        console.log('Constructor 1');
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
    render() { // lifecycle
        console.log('Render 2');
        return <div>
            <div>This is App class Component</div>
            <AddProduct />
            <Welcome />
            <ProductList />
            <Product />
            <Title />
            <Star />
        </div>
    }
}