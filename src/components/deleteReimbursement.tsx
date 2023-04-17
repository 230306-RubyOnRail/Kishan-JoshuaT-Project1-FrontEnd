import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { deleteReimburse } from "../remote/services/reimbursements-service";
import "../styles/reimbursement.css";


export default function DeleteReimbursement() {

    // const [reimbursement, setReimbursements] = useState<Reimbursement_Model[] | undefined>(undefined);
    const [id, setId] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");


    // useEffect(() => {
    //     updateReimbursements();

    // },[]);


    let deleteId = (e: React.ChangeEvent<HTMLInputElement>) => {
        //Number converts the e.target.value string to number
        setId(Number(e.target.value));
    }

    let deleteReimbursements = async () => {

        // let response = await updateReimburse(description, amount, id);

        try {
            let response = await deleteReimburse(id);
            if (response.status === 200) {
                setErrorMessage("");
            } else {
                setErrorMessage("Unable to delete request.");
            }
        } catch (err) {
            setErrorMessage("Unable to send request.");
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
            <h2>Delete Reimbursements</h2>
            <TextField id="outlined-basic" label="ReimbursementID" variant="outlined" type="number" onChange={deleteId}/>
            <Button variant="contained" className="deleteButton" onClick={deleteReimbursements}>Delete</Button>
        </div>
    );


}
