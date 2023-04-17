import { Button, TextField } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { updateReimburseManager } from "../../remote/services/reimbursements-service";

export default function UpdateReimbursementManager() {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [status, setStatus] = useState("");
    const [id, setId] = useState(0);
    const [userID, setUserID] = useState(0);

    const [errorMessage, setErrorMessage] = useState("");


    // useEffect(() => {
    //     updateReimbursements();

    // },[]);

    let updateStatus = (e: SyntheticEvent) => {
        setStatus((e.target as HTMLInputElement).value);


    }
    let updateUserID = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserID(Number(e.target.value));


    }

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
        setErrorMessage("");

        // let response = await updateReimburse(description, amount, id);

        try {
            let response = await updateReimburseManager(description, amount, id, status, userID);
            if (response.status === 200) {
                // console.log(response.data);
                setErrorMessage("Reimbursement updated successfully");
            }
        } catch (err) {
            console.log(err);
            setErrorMessage("Unable to send the request.");
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
            <h3>Update Reimbursement</h3>
            <TextField id="outlined-basic" label="ReimbursementID" variant="outlined" type="number" onChange={updateId}/>
            <TextField id="outlined-basic" label="User ID" variant="outlined" onChange={updateUserID}/>
            <TextField id="outlined-basic" label="Description" variant="outlined" onChange={updateDescription}/>
            <TextField id="outlined-basic" label="Amount" variant="outlined" onChange={updateAmount}/>

            <TextField id="outlined-basic" label="Status" variant="outlined" onChange={updateStatus}/>
            <Button variant="contained" className="updateButton" onClick={updateReimbursements}>Update</Button>

            <p>{errorMessage}</p>
        </div>
    )
}
