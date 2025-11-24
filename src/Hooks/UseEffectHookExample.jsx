import { useState, useEffect } from "react";
import axios from 'axios';

const UseEffectHookExample = () => {
    const [data, setData] = useState([{ name: "Rahul" }]); // default value inside state
    const [data2, setData2] = useState([{ name: "Rahul" }]); // default value inside state

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((responseData) => {
                console.log("fetch", responseData);
                setData(responseData);
            })
    }, []) // effect will run onle once

    useEffect(() => {
        // Make a request for a user with a given ID
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                // handle success
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
        <h1>List of Users using useState and useEffect Hook and fetch method</h1>
        <ul>
            {data.map((user, index) => (
                <li key={index}>{user.name}</li>
            ))}
        </ul>

        <h1>List of Users using useState and useEffect Hook and axios module</h1>
        <ul>
            {data2.map((user, index) => (
                <li key={index}>{user.name}</li>
            ))}
        </ul>
    </div>);
}

export default UseEffectHookExample;