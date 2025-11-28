import React from "react";
import AddProduct from "./AddProduct";
import Welcome from "./Welcome";
import ProductList from "./ProductList";
import Title from "./Title";
import Star from "./Star";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Courses from './Courses';
import Course from './Course';
import Contact from './Contact';
import Login from './Login';
import PageNotFound from "./PageNotFound";
import ProductDetail from "./ProductDetail";
import HooksExample from "./Hooks/HooksExample";
import ReactBootstrap from "./react-bootstrap/ReactBootstrap";
import EditProduct from "./EditProduct";
import { removeProduct, addProduct, loadProducts } from './redux/actions';

export default class App extends React.Component { // Exporting a component
    constructor(props) { // component lifecycle
        super(props);
        // console.log('Constructor 1');
        this.state = {
            username: "Sumit",
            address: "Mumbai",
            products: [ // default products
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
        // console.log(this.props);
    }
    componentDidMount() {
        /*
            1. Get products data from localstorage and update products state
        */
        if (!localStorage.getItem("products")) {
            localStorage.setItem("products", JSON.stringify(this.state.products));
        }

        const storedProducts = JSON.parse(localStorage.getItem("products")); // load data from localstorage
        this.setState({ // to update state we use this.setState, whenever state update component rerender
            products: storedProducts
        })

        this.props.dispatch(loadProducts()); // calling load products action
        this.props.dispatch(addProduct({
            "productId": 6,
            "productName": "iPhone",
            "productCode": "555",
            "releaseDate": "March 19, 2016",
            "description": "iPhone with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        }));
        this.props.dispatch(removeProduct(1));
    }

    updateUsername = () => {
        this.setState({
            username: "Hardika"
        })
    }

    addProduct = (productSubmitted) => {
        this.setState((state) => {
            const updateProducts = [...state.products, productSubmitted];
            localStorage.setItem("products", JSON.stringify(updateProducts)); // saving to localstorage
            return {
                products: updateProducts
            }
        })
    }

    updateProduct = (updatedProduct) => {
        this.setState((state) => ({
            products: state.products.map(p =>
                p.productId === updatedProduct.productId ? updatedProduct : p
            )
        }))
    }

    render() { // lifecycle
        // console.log('Render 2');
        console.log("state is ", this.state);
        return <BrowserRouter>
            <Routes>
                <Route path="/" element={<Nav />}>
                    <Route index element={<Welcome title="Welcome" user="Devender" employeeCode="200" />} />
                    <Route path="/products" element={<ProductList message="Product List" products={this.state.products} />} />
                    <Route path="/products/:id" element={<ProductDetail />} />
                    <Route path="/editproduct/:id" element={<EditProduct onUpdateProduct={(p) => this.updateProduct(p)} />} />
                    <Route path="/addproduct" element={<AddProduct address="Delhi" onAddProduct={(addedProduct) => this.addProduct(addedProduct)} />} />
                    <Route path="/title" element={<Title />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/course" element={<Course />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/hooks" element={<HooksExample />} />
                    <Route path="/reactbootstrap" element={<ReactBootstrap />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    }
}