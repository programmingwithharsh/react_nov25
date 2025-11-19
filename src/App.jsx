import React from "react";
import AddProduct from "./AddProduct";
import Welcome from "./Welcome";
import ProductList from "./ProductList";
import Product from "./Product";
import Title from "./Title";
import Star from "./Star";

export default class App extends React.Component { // Exporting a component
    render() { // lifecycle
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