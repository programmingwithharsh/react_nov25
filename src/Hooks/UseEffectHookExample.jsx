import { useState, useEffect } from "react";
const UseEffectHookExample = () => {
    const [data, setData] = useState([{ name: "Rahul" }]); // default value inside state

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((responseData) => {
                console.log({ responseData });
                setData(responseData);
            })
    }, []) // effect will run onle once

    return (<div>
        <h1>List of Users using useState and useEffect Hook and fetch method</h1>
        <ul>
            {data.map((user, index) => (
                <li key={index}>{user.name}</li>
            ))}
        </ul>
    </div>);
}

export default UseEffectHookExample;