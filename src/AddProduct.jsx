import React from "react";
import { Navigate } from 'react-router-dom';

export default class AddProduct extends React.Component {

    constructor() {
        super();
        this.state = {
            redirect: false
        }
    }

    handleSubmit = (event) => {
        event.preventDefault(); // stop page refresh when i click on submit
        const productName = event.target.elements.productName.value;
        const productCode = event.target.elements.productCode.value;
        const releaseDate = event.target.elements.releaseDate.value;
        const description = event.target.elements.description.value;
        const price = event.target.elements.price.value;
        const rating = event.target.elements.rating.value;

        const product = { // create new object
            "productId": Number(new Date()),
            "productName": productName,
            "productCode": productCode,
            "releaseDate": releaseDate,
            "description": description,
            "price": price,
            "rating": rating
        }

        let products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
        products.push(product);
        if (productName === "") {
            alert("Please enter product name");
        } else {
            localStorage.setItem("products", JSON.stringify(products));
            this.setState({
                redirect: true
            })
        }
    }

    render() {
        const { redirect } = this.state;
        // use if else beore return statement
        /*
        // Option 1
            if(redirect){

            } else {

            }
        */
        /*
            JSX 
             && (Option 2)
             Ternary operator {redirect ? <Navigate to="/products" />: null} (Option 3)
        */
        return <div className="col-6 mt-2">
            {
                redirect && (
                    <Navigate to="/products" />
                )
            }
            <form onSubmit={this.handleSubmit}>
                Product Name<input className="form-control" type="text" name="productName" />
                Product Code <input className="form-control" type="text" name="productCode" />
                Release Date <input className="form-control" type="date" name="releaseDate" />
                Description <input className="form-control" type="text" name="description" />
                Price <input className="form-control" type="text" name="price" />
                Rating <input className="form-control" type="number" name="rating" />
                <input type="submit" className="btn btn-primary mt-2" value="Add Product" />
            </form>
        </div>
    }
}