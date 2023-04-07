import { SyntheticEvent, useState } from "react";
import { Reimbursement } from "../models/reimbursement";
import { createReimburse } from "../remote/services/reimbursements-service";


// interface ICreateReimbursement {
//     description:  |
// }



export default function CreateReimbursements() {

    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    let updateDescription = (e: SyntheticEvent) => {
        setDescription((e.target as HTMLInputElement).value);
        console.log('Update description worked.');
    }

    let updateAmount = (e: SyntheticEvent) => {
        setAmount((e.target as HTMLInputElement).value);
        console.log('Update amount worked.');
    }

    let createButton = async (e: SyntheticEvent) => {
        if(description && amount) {
            console.log('Description and amount exists');
            try {
                let response = await createReimburse(description, amount);

                if(response.status === 200) {
                    console.log('It got added');
                } else {
                    console.log('Something went wrong.');
                }
            } catch (err) {
                console.log(err);
            }
        } else {
            console.log('Either one is missing');
        }
    }

    return(
        <div>
            <input type="text" id="description" placeholder="Enter the description here: " onChange={updateDescription} />
            <input type="text" id="amount" placeholder="Enter the amount here: " onChange={updateAmount} />
            <button onClick={updateDescription}>Update Description</button>
            <button onClick={updateAmount}>Update Amount</button>
            <button onClick={createButton}>Create</button>
        </div>


    );

}