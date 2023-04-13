import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { User } from "../models/user";
import UpdateReimbursement from "./updateReimbursement";
import { createReimburse, updateReimburse } from "../remote/services/reimbursements-service";
import "../styles/NavStyle.css"
import DeleteReimbursement from "./deleteReimbursement";


export default function Modify() {




    return (
        <>
        <UpdateReimbursement />
        <DeleteReimbursement />
        </>
    )
}
