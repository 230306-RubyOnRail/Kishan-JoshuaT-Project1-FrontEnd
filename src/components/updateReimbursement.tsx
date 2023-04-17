import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import { SyntheticEvent, useState } from "react";
import { updateReimburse } from "../remote/services/reimbursements-service";
import "../styles/reimbursement.css";


export default function UpdateReimbursement() {

    // const [reimbursement, setReimbursements] = useState<Reimbursement_Model[] | undefined>(undefined);
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [id, setId] = useState(0);

    const [errorMessage, setErrorMessage] = useState("");


    // useEffect(() => {
    //     updateReimbursements();

    // },[]);

    let updateDescription = (e: SyntheticEvent) => {
        setDescription((e.target as HTMLInputElement).value);
    }

    let updateAmount = (e: SyntheticEvent) => {
        setAmount((e.target as HTMLInputElement).value);
    }

    let updateId = (e: React.ChangeEvent<HTMLInputElement>) => {
        //Number converts the e.target.value string to number
        setId(Number(e.target.value));
    }

    let updateReimbursements = async () => {

        // let response = await updateReimburse(description, amount, id);

        try {
            let response = await updateReimburse(description, amount, id);
            if (response.status === 200) {
                setErrorMessage("");
            } else {
                setErrorMessage("Unable to update reimbursement.");
            }
        } catch (err) {
            setErrorMessage("Unable to send request.")
            console.log(err);
        }


        // if (response.status === 200) {
        //     console.log('Reimbursement updated successfully')
        // } else {
        //     console.log('Unable to update reimbursements.');
        // }


        // response = await fetch(`http://localhost:3000/reimbursement/:id`, {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': `Bearer ${props.currentUser?.token}`
        //     },
        //     body: JSON.stringify(reimbursement)
    }

    // if (response.status === 200) {
    //     console.log('Reimbursement updated successfully')
    // } else {
    //     console.log('Unable to update reimbursements.');
    // }

    //}

    // return is where things get rendered
    return (
        <div>
            <h2>Update Reimbursements</h2>
            <TextField id="outlined-basic" label="Description" variant="outlined" onChange={updateDescription}/>
            <TextField id="outlined-basic" label="Amount" variant="outlined" onChange={updateAmount}/>
            <TextField id="outlined-basic" label="ReimbursementID" variant="outlined" type="number" onChange={updateId}/>
            <Button variant="contained" className="updateButton" onClick={updateReimbursements}>Update</Button>

            <p>{errorMessage}</p>
        </div>
    );


}
