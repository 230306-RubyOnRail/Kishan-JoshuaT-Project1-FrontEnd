import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from "@mui/material/TextField";
import { SyntheticEvent, useState } from "react";
import { createReimburse } from "../remote/services/reimbursements-service";
import "../styles/reimbursement.css";



interface ICreateReimbursement {
    getReimbursements: () => void | undefined;
}


export default function CreateReimbursements(props: any) {

    // useEffect(async () => {
    //     await props.getReimbursements();
    // }, response
    // );



    var response;

    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [errorMessage, setErrorMessage] = useState("");



    let updateDescription = (e: SyntheticEvent) => {
        setDescription((e.target as HTMLInputElement).value);
    };

    let updateAmount = (e: SyntheticEvent) => {
        setAmount((e.target as HTMLInputElement).value);
    };

    let createButton = async (e: SyntheticEvent) => {
        if (description && amount) {
            setErrorMessage("");
            try {
                response = await createReimburse(description, amount);

                if (response.status === 200) {

                } else {
                    setErrorMessage("Something went wrong.");
                }
            } catch (err) {
                setErrorMessage("Unable to send request.");
                console.log(err);
            }
        } else {
            setErrorMessage("Either one is missing");
        }
    };

    return (
        <div className="ReimbursementCreate">
            <Stack spacing={3} direction="row">
                <TextField id="outlined-basic" label="Description" variant="outlined" onChange={updateDescription} />

                <TextField id="outlined-basic" label="Amount" variant="outlined" onChange={updateAmount} />

            </Stack>

            <Button variant="contained" className="createButton" onClick={createButton}>Create</Button>



        </div>
    );
}
