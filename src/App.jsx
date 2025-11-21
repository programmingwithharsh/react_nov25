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
            address: "Mumbai",
            products: [
                {
                    "productId": 1,
                    "productName": "Leaf Rake",
                    "productCode": "GDN-0011",
                    "releaseDate": "March 19, 2016",
                    "description": "Leaf rake with 48-inch wooden handle.",
                    "price": 19.95,
                    "starRating": 3.2,
                    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
                },
                {
                    "productId": 2,
                    "productName": "Garden Cart",
                    "productCode": "GDN-0023",
                    "releaseDate": "March 18, 2016",
                    "description": "15 gallon capacity rolling garden cart",
                    "price": 32.99,
                    "starRating": 4.2,
                    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
                },
                {
                    "productId": 3,
                    "productName": "Hammer",
                    "productCode": "TBX-0048",
                    "releaseDate": "May 21, 2016",
                    "description": "Curved claw steel hammer",
                    "price": 8.9,
                    "starRating": 4.8,
                    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
                },
                {
                    "productId": 4,
                    "productName": "Saw",
                    "productCode": "TBX-0022",
                    "releaseDate": "May 15, 2016",
                    "description": "15-inch steel blade hand saw",
                    "price": 11.55,
                    "starRating": 3.7,
                    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
                },
                {
                    "productId": 5,
                    "productName": "Video Game Controller",
                    "productCode": "GMG-0042",
                    "releaseDate": "October 15, 2015",
                    "description": "Standard two-button video game controller",
                    "price": 35.95,
                    "starRating": 4.6,
                    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
                }
            ]
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
        return <div className="container">
            <div style={myStyle}>This is App class Component</div>
            <div style={myStyle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit eaque minus reprehenderit explicabo laudantium ducimus iste perferendis nihil eos nulla, vitae nesciunt ullam magnam esse. Molestias quisquam minus amet numquam!</div>

            <div style={{ color: 'white', backgroundColor: 'blue' }}><b>State username is {this.state.username}</b></div>
            <button className="btn btn-primary m-4" onClick={this.updateUsername}>Update username state</button>
            <AddProduct />
            <Welcome title="Welcome" user="Devender" employeeCode="200" />
            <ProductList message="Product List" products={this.state.products} />
            <Title />
            <Star />
        </div>
    }
}