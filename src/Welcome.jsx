import React from "react";
import './style.css';
import Slider from "./Bootstrap/Slider";
import Card from "./Bootstrap/Card";
import Modal from "./Bootstrap/Modal";
import Grid from "./Bootstrap/Grid";
import Footer from "./Footer";

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props); // receive props value in class component

        localStorage.setItem("username", "Sumit"); // string
        localStorage.setItem("active", true); // boolean
        localStorage.setItem("x", 2); // number

        let user = { id: 1 };
        let userString = JSON.stringify(user); // convert object into string
        localStorage.setItem("user", userString); // storing data in localstorage

        let users = [
            {
                id: 1,
                fullname: 'Aditi',
                email: 'Aditi@gmail.com',
                password: 'Aditi123'
            },
            {
                id: 1,
                fullname: 'Amit',
                email: 'Amit@gmail.com',
                password: 'Amit123'
            }
        ];

        let usersString = JSON.stringify(users); // convert object into string
        localStorage.setItem("users", usersString); // storing data in localstorage

        console.log(typeof localStorage.getItem("username")); // get item from localstorage
        console.log(typeof localStorage.getItem("active")); // get item from localstorage
        console.log(typeof localStorage.getItem("x")); // get item from localstorage
        console.log(typeof localStorage.getItem("user")); // get item from localstorage
        console.log(typeof localStorage.getItem("users")); // get item from localstorage

        console.log(localStorage.getItem("username")); // get item from localstorage
        console.log(localStorage.getItem("active")); // get item from localstorage
        console.log(localStorage.getItem("x")); // get item from localstorage
        console.log(JSON.parse(localStorage.getItem("user"))); // JSON.parse - convert string into object 
        console.log(JSON.parse(localStorage.getItem("users"))); // JSON.parse - convert string into object 
    }
    render() {
        return <div>
            <Slider />
            <Modal />
            <Grid />
            <Footer/>
        </div>
    }
}