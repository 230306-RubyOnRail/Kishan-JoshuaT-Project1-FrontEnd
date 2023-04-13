import { Button } from "@mui/material";
import TextField from "@mui/material/TextField/TextField";
import { useState } from "react";
import { Link } from "react-router-dom";

interface ISpecificReimbursementProps {
    setUserID: (userID: number) => void;
}
export default function SpecificReimbursement(props: ISpecificReimbursementProps) {


    let updateUserID = (e: any) => {
        props.setUserID(e.currentTarget.value);
    }

    return (
        <div>
                <TextField id="outlined-basic" label="User ID for list of reimbursements" variant="outlined" onChange={updateUserID}/>
                <Button variant="contained" className="link"><Link to="/manager/specificreimbursement" className="link">Get Reimbursements</Link></Button>
        </div>
    );
}
