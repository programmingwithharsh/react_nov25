import { useState, useEffect } from "react";
import axios from 'axios';

const UseEffectHookExample = () => {
    const [data, setData] = useState([{ name: "Rahul" }]); // default value inside state
    const [data2, setData2] = useState([{ name: "Rahul" }]); // default value inside state

    useEffect(() => {
        // Getting a resource
        fetch("http://localhost:3000/", {
            method: "GET"
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log("fetch", responseData);
                setData(responseData);
            })
    }, []) // effect will run onle once

    useEffect(() => {
        // Creating a resource
        fetch("http://localhost:3000/", {
            method: "POST",
            body: JSON.stringify({
                fullname: "Hardika"
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log("fetch", responseData);
            })
    }, []) // effect will run onle once

    useEffect(() => {
        // Updating a resource
        fetch("http://localhost:3000/", {
            method: "PUT",
            body: JSON.stringify({
                fullname: "Hardika"
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log("fetch", responseData);
            })
    }, []) // effect will run onle once

    useEffect(() => {
        // Deleting a resource
        fetch('http://localhost:3000/', {
            method: 'DELETE',
        });
    }, [])

    useEffect(() => {
        // Make a request for a user with a given ID
        axios.get('http://localhost:3000/')
            .then(function (response) {
                // handle success
                // debugger;
                console.log("Axios", response);
                setData2(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, [])

    return (<div>
        <h1>List of Users using useState and useEffect Hook and fetch method GET API Call</h1>
        <ul>
            {data.map((user, index) => (
                <li key={index}>{user.fullname}</li>
            ))}
        </ul>

        <h1>List of Users using useState and useEffect Hook and axios module</h1>
        <ul>
            {data2.map((user, index) => (
                <li key={index}>{user.fullname}</li>
            ))}
        </ul>
    </div>);
}

export default UseEffectHookExample;