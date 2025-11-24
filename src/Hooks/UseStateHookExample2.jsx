import { useEffect, useState } from "react";

const UserStateHookExample2 = () => {
    // Array Destructuring
    const [data, setData] = useState("Rahul"); // default value is Rahul
    /*
    const [count, setCount] = useState(0); // number
    const [isLoggedIn, setIsLoggedIn] = useState(false); // boolean 
    const [flowers, setFlowers] = useState(["Rose", "Dahlia", "Magnolia", "Tulip", "Daisy"]); // array
    */

    console.log(`Component Render Starts`);
    console.log(`Current State >>>>> ${data}`);


    useEffect(() => {
        console.log(`useEffect running (after first render)`);
        setData("Hardika");
        console.log(`State update triggered inside useEffect`)
    }, []) // empty depedency, code runs only once


    console.log(`Component Render Ends`);
    return (<div>
        <h1>Display name using useState and useEffect Hook</h1>
        <p>{data}</p>
    </div>);
}

export default UserStateHookExample2;