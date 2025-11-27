import { useState } from "react";
import { Navigate } from "react-router-dom";

function Login() {

    const [username, setUsername] = useState("Harsh");
    const [password, setPassword] = useState("harsh");
    const [error, setError] = useState("");
    const [redirect, setRedirect] = useState(false);

    if (!localStorage.getItem("loggedInUsers")) {
        const dummyUsers = [
            {
                username: 'Devender',
                password: 'Devender'
            },
            {
                username: 'Nabham',
                password: 'nabham'
            }
        ];
        localStorage.setItem("loggedInUsers", JSON.stringify(dummyUsers));
    }
    /*
        1. Create dummy username and password field inside users localstorage
        2. When i click on login, i will check weather username and password field is exist inside users localstorage or not
        3. If username and password exist redirect to products page else error message
    */

    const handleLogin = (event) => {
        event.preventDefault();

        const users = JSON.parse(localStorage.getItem("loggedInUsers")); // load data from localstorage

        const foundUser = users.find(user => user.username == username && user.password == password);
        if (foundUser) {
            setRedirect(true);
        } else {
            setError("Invalid username or password");
        }
    }

    if (redirect) {
        return <Navigate to="/products" />
    }

    return (<div>
        <h1>Login Form</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="col-4">
            <form onSubmit={handleLogin}>
                Username <input className="form-control" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                Password <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input className="btn btn-primary mt-2" type="submit" value="Login" />
            </form>
        </div>

    </div>);
}

export default Login;