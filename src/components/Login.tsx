import { SyntheticEvent, useState } from "react";
import { User } from "../models/user";
import { Navigate } from "react-router-dom";
import { authenticate } from "../remote/services/sessions-service";

interface ILoginProps {
    currentUser: User | undefined,
    setCurrentUser: (nextUser: User) => void
}

export default function Login(props: ILoginProps) {

    // const [principal, setPrincipal] = useState<User>();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    let updateUsername = (e: SyntheticEvent) => {
        setUsername((e.target as HTMLInputElement).value);
    }

    let updatePassword = (e: SyntheticEvent) => {
        setPassword((e.target as HTMLInputElement).value);
    }

    let login = async (e: SyntheticEvent) => {
        console.log(`username: ${username} and password: ${password}`);
        if (username && password) {
            setErrorMessage('');
            console.log(`username: ${username} and password: ${password}`);

            try {
                // let response = await fetch('http://localhost:3000/sessions/create', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json'
                //     },
                //     body: JSON.stringify({ username, password })
                // });

                let response = await authenticate({username, password});

                if (response.status === 201) {
                    let data: User = response.data;
                    props.setCurrentUser(data);
                    sessionStorage.setItem('token', data.token);
                } else if (response.status === 401) {
                    setErrorMessage('Invalid username and/or password');
                    console.log(errorMessage);
                } else {
                    setErrorMessage('Unable to reach API');
                    console.log(errorMessage);
                }

            } catch (err) {
                console.log(err);
            }
        } else {
            setErrorMessage('Invalid input for username/password');
            console.log(errorMessage);
        }

    }

    return (
        props.currentUser ?
            <>
                <Navigate to="/" />
            </>
            :
            <>
                <div>
                    <input type="text" id="login-username" placeholder="Enter your username here: " onChange={updateUsername} />
                    <input type="text" id="login-password" placeholder="Enter your password here: " onChange={updatePassword} />
                    <button id="login-button" onClick={login}>Submit</button>
                </div>
                <div>
                    {errorMessage}
                </div>
            </>
    );
}