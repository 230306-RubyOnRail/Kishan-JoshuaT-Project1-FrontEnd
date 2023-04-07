import { Button } from "@mui/material";
import { User } from "../models/user";
import { useEffect, useState } from "react";
import ReimbursementList from "./ReimbursementList";
import {Reimbursement as Reimbursement_Model} from "../models/reimbursement";
import CreateReimbursements from "./createReimbursement";

interface IReimbursementProps {
    currentUser: User | undefined
}

export default function Reimbursement(props: IReimbursementProps) {

    const [reimbursements, setReimbursements] = useState();


    // function addReimbursement(item) {
    //     setReimbursements(previousReimbursement => [...previousReimbursement, item]);
    // }

    let response;

    useEffect(() => {
        getReimbursements();
        
    },[]);

    let getReimbursements = async () => {
        response = await fetch(`http://localhost:3000/reimbursement/index`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${props.currentUser?.token}`
            }
        })

        if (response.status === 200) {
            let result = await response.json()
            setReimbursements(result);
            console.log(result);
            console.log(reimbursements);
        } else {
            console.log('Unable to retrieve reimbursements.');
        }

    }
    let getResult = (() => {
        getReimbursements();
        console.log(reimbursements);
    });
    // return is where things get rendered
    return (
        <>
            <p>Reimbursement is good!</p>
            <Button variant="outlined" onClick={getResult}>Get reimbursement</Button>
            <CreateReimbursements />

            
            <ul>
                <table>
                    <tbody>
                        {
                            // reimbursements != undefined ?
                            // reimbursements.map(items => {
                            //     return <ReimbursementList status={items.status} user_id={items.user_id} id={items.id} description={items.description} amount={items.amount} created_at={items.created_at} updated_at={items.updated_at}   /> 
                            // })
                            // :
                            // <></>
                        }
                            
                    
                                
                        
                    </tbody>
                </table>
            </ul>


        </>
    );
}