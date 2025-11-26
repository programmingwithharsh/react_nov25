import React from "react";
import './style.css';
import Slider from "./Bootstrap/Slider";
import Card from "./Bootstrap/Card";
import Modal from "./Bootstrap/Modal";
import Grid from "./Bootstrap/Grid";
import Footer from "./Footer";

export default class Welcome extends React.Component {
    // export default class Welcome extends React.PureComponent {
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
        this.state = {
            count: 0
        }
        console.log('Constructor - 1');
    }

    increment = () => {
        this.setState({
            count: 1
        })
    }

    componentDidMount() {
        console.log('ComponentDidMount - 3');
    }

    componentWillUnmount() {
        // Clean up work here, clear intervals, cancel API calls, unsubscribe, clean up memory
        console.log('ComponentWillUnmount - 4');
    }

    shouldComponentUpdate() {
        return true; // allow re render, defult
        // return false; // block re render
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML = "Before update, count is " + prevState.count;
        return true;
    }

    componentDidUpdate() {
        document.getElementById("div2").innerHTML = "After update, count is " + this.state.count;
    }

    render() {
        console.log('Render - 2');
        console.log(this.state);
        return <div>
            <div id="div1">Before update</div>
            <div id="div2">After update</div>
            <button className="btn btn-primary" onClick={this.increment}>Increment</button>
            <Slider />
            <Modal />
            <Grid />
            <Footer />
        </div>
    }
}