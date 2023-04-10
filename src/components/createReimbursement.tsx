import { SyntheticEvent, useState, useEffect } from "react";
import { Reimbursement } from "../models/reimbursement";
import { createReimburse } from "../remote/services/reimbursements-service";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import "../styles/reimbursement.css"



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



    let updateDescription = (e: SyntheticEvent) => {
        setDescription((e.target as HTMLInputElement).value);
        console.log("Update description worked.");
    };

    let updateAmount = (e: SyntheticEvent) => {
        setAmount((e.target as HTMLInputElement).value);
        console.log("Update amount worked.");
    };

    let createButton = async (e: SyntheticEvent) => {
        if (description && amount) {
            console.log("Description and amount exists");
            try {
                response = await createReimburse(description, amount);

                if (response.status === 200) {
                    console.log("It got added");
                } else {
                    console.log("Something went wrong.");
                }
            } catch (err) {
                console.log(err);
            }
        } else {
            console.log("Either one is missing");
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
