import { useEffect, useState } from "react";

const UserStateHookExample = () => {
    // Array Destructuring
    const [data, setData] = useState([{
        name: "Rahul"
    }]); // default value is Rahul

    /*
    In class component, we use this.state and this.setState({})
    In function component, we use data is like this.state and setData is like this.setState({})
    */

    useEffect(() => {
        setData([{
            name: "Hardika"
        }])
    }, [])

    return (<div>
        <h1>Display name using useState and useEffect Hook</h1>
        <ul>

            {data.map((user, index) => (
                <li key={index}>
                    {user.name}
                </li>)
            )}

        </ul>
    </div>);
}

export default UserStateHookExample;