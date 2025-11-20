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
        let myStyle = { color: 'white', backgroundColor: 'green', border: "2px solid red", margin: "10px" };
        return <div>
            <div style={myStyle}>This is App class Component</div>
            <div style={myStyle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit eaque minus reprehenderit explicabo laudantium ducimus iste perferendis nihil eos nulla, vitae nesciunt ullam magnam esse. Molestias quisquam minus amet numquam!</div>

            <div style={{ color: 'white', backgroundColor: 'blue' }}><b>State username is {this.state.username}</b></div>
            <button onClick={this.updateUsername}>Update username state</button>
            <AddProduct />
            <Welcome title="Welcome" user="Devender" employeeCode="200" />
            <ProductList message="Product List" />
            <Title />
            <Star />
        </div>
    }
}