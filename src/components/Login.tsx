import { SyntheticEvent, useState } from "react";
import { User } from "../models/user";

export default function Login() {

    const [principal, setPrincipal] = useState<User>();
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
        if(username && password){
            setErrorMessage('');
            console.log(`username: ${username} and password: ${password}`);

            try {
                let response = await fetch('http://localhost:3000/sessions/create', {
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify({username, password})
                });

                if(response.status === 201){
                    setPrincipal(await response.json());

                } else if(response.status === 401){
                    setErrorMessage('Invalid username and/or password');
                    console.log(errorMessage);
                } else {
                    setErrorMessage('Unable to reach API');
                    console.log(errorMessage);
                }

            } catch(err) {
                console.log(err);
            }
        } else {
            setErrorMessage('Invalid input for username/password');
            console.log(errorMessage);
        }

    }

    return (
        principal ?
        <>
            Hello {principal.username} token: {principal.token}. You're id is {principal.user_id}, and you're a {principal.account_type}
        </>
        :
    <>
    <div>
        <input type="text" id="login-username" placeholder="Enter your username here: " onChange={updateUsername}/>
        <input type="text" id="login-password" placeholder="Enter your password here: " onChange={updatePassword}/>
        <button id="login-button" onClick={login}>Submit</button>
    </div>
    <div>
        {errorMessage}
    </div>
    </>
    );
}