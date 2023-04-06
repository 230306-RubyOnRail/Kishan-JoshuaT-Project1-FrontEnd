import { Button } from "@mui/material";
import { User } from "../models/user";
import { useState } from "react";

interface IReimbursementProps{
    currentUser: User | undefined
}

export default function Reimbursement(props: IReimbursementProps) {

    const [reimbursements, setReimbursements] = useState([]);
    

    // function addReimbursement(item) {
    //     setReimbursements(previousReimbursement => [...previousReimbursement, item]);
    // }

    let getReimbursements = async () => {
        let response = await fetch(`http://localhost:3000/reimbursement/index`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${props.currentUser?.token}`
            }
        })

        if(response.status === 200){
        
            console.log(await response.json());
        } else {
            console.log('Unable to retrieve reimbursements.');
        }

    }

    // return is where things get rendered
    return(
        <>
            <p>Reimbursement is good!</p>
            <Button variant="outlined" onClick={getReimbursements}>Get reimbursement</Button>
            {/* <ul>
                {results.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul> */}
        </>
    );
}