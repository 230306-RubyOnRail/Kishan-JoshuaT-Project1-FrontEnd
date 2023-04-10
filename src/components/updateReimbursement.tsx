import { SyntheticEvent, useState, useEffect } from "react";
import { Reimbursement } from "../models/reimbursement";
import { createReimburse } from "../remote/services/reimbursements-service";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import "../styles/reimbursement.css"

export default function UpdateReimbursement(props: any) {

    const [reimbursement, setReimbursements] = useState({});

    useEffect(() => {
        fetch(`/api/reimbursements/${reimbursement}`)
          .then(response => response.json())
          .then(data => setReimbursements(data));
      }, [reimbursement]);


}