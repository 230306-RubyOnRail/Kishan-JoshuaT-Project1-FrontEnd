import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { SyntheticEvent, useState } from "react";
import { createUser } from "../../remote/services/createUser-service";


export default function CreateUser() {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [accountType, setAccountType] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    let updateName = (e: SyntheticEvent) => {
        setName((e.target as HTMLInputElement).value);

    };

    let updateUsername = (e: SyntheticEvent) => {
        setUsername((e.target as HTMLInputElement).value);

    };

    let updatePassword = (e: SyntheticEvent) => {
        setPassword((e.target as HTMLInputElement).value);

    };

    let updateAccountType = (e: SyntheticEvent) => {
        setAccountType((e.target as HTMLInputElement).value);
    };

    let createButton = (e: SyntheticEvent) => {
        if (name && username && password && accountType) {
            createUser(name, username, password, accountType);
            console.log("User Created");
            setErrorMessage("User Created");
        } else {
            console.log("One or more fields are missing");
            setErrorMessage("One or more fields are missing");
        }
    };



    return (
        <>
            <Stack spacing={3} direction="row">
                <TextField id="outlined-basic" label="Name" variant="outlined" onChange={updateName}/>
                <TextField id="outlined-basic" label="Username" variant="outlined" onChange={updateUsername}/>

                <TextField id="outlined-basic" label="Password" variant="outlined" onChange={updatePassword}/>
                <TextField id="outlined-basic" label="Account Type" variant="outlined" onChange={updateAccountType}/>
                <Button variant="contained" className="createUserButton" onClick={createButton}>Create</Button>
                <p>{errorMessage}</p>
            </Stack>

        </>
    );
}
