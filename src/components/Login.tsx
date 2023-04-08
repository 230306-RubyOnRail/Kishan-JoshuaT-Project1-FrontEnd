import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { SyntheticEvent, useState } from "react";
import { Navigate } from "react-router-dom";
import { User } from "../models/user";
import { authenticate } from "../remote/services/sessions-service";

interface ILoginProps {
  currentUser: User | undefined;
  setCurrentUser: (nextUser: User) => void;
}

export default function Login(props: ILoginProps) {
  const styleLogin = {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",

    fontSize: "2rem",
    fontWeight: "bold",
    fontFamily: "sans-serif",
    textAlign: "center" as "center",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",

  };
  const styleButton = {
    color: "white",
    // background: '#1976d2',
    // borderRadius: '10px',
    // border: '1px solid #1976d2',
    margin: "20px",

  };
  const errorMessageStyle = {
    paddingTop: "10px",
    color: "darkblue",
    fontSize: "1rem",
    fontWeight: "bold",
    fontFamily: "sans-serif",
    textAlign: "center" as "center",
    };

  // const [principal, setPrincipal] = useState<User>();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  let updateUsername = (e: SyntheticEvent) => {
    setUsername((e.target as HTMLInputElement).value);
  };

  let updatePassword = (e: SyntheticEvent) => {
    setPassword((e.target as HTMLInputElement).value);
  };

  let login = async (e: SyntheticEvent) => {
    console.log(`username: ${username} and password: ${password}`);
    if (username && password) {
      setErrorMessage("");
      console.log(`username: ${username} and password: ${password}`);

      try {
        // let response = await fetch('http://localhost:3000/sessions/create', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ username, password })
        // });

        let response = await authenticate({ username, password });

        if (response.status === 201) {
          let data: User = response.data;
          props.setCurrentUser(data);
          sessionStorage.setItem("token", data.token);
        } else if (response.status === 401) {
          setErrorMessage("Invalid username and/or password");
          console.log(errorMessage);
        } else {
          setErrorMessage("Unable to reach API");
          console.log(errorMessage);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      setErrorMessage("Invalid input for username/password");
      console.log(errorMessage);
    }
  };

  return props.currentUser ? (
    <>
      <Navigate to="/" />
    </>
  ) : (
    <>
      <div style={styleLogin}>
        <TextField
          style={styleButton}
          required
          id="outlined-required"
          label="Required"
          defaultValue="Username"
          onChange={updateUsername}
        />
        <TextField

          style={styleButton}
          required
          id="outlined-required"
          label="Required"
          defaultValue="Password"
          onChange={updatePassword}
        />
        <Button variant="contained" onClick={login}>
          Login
        </Button>
        <div style={errorMessageStyle}>{errorMessage}</div>
        {/* <input type="text" id="login-username" placeholder="Enter your username here: "  />
                    <input type="text" id="login-password" placeholder="Enter your password here: "  /> */}
      </div>

    </>
  );
}
