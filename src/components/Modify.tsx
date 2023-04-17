import { Navigate } from "react-router-dom";
import { User } from "../models/user";
import "../styles/NavStyle.css";
import DeleteReimbursement from "./deleteReimbursement";
import UpdateReimbursement from "./updateReimbursement";

interface IModifyProps {
    currentUser: User | undefined
}

export default function Modify(props: IModifyProps) {




    return (
        <>
            { props.currentUser ?
            <>
            <UpdateReimbursement />
            <DeleteReimbursement />
            </>
            :
            <>
            <Navigate to="/login"/>
            </>
    }
    </>
        );
}
