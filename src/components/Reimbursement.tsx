import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Reimbursement as Reimbursement_Model } from "../models/reimbursement";
import { User } from "../models/user";
import CreateReimbursements from "./createReimbursement";
import "../styles/reimbursement.css"

// table imports
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Navigate } from "react-router-dom";

interface IReimbursementProps {
    currentUser: User | undefined
}

export default function Reimbursement(props: IReimbursementProps) {

    const [reimbursements, setReimbursements] = useState<Reimbursement_Model[] | undefined>(undefined);
    const [errorMessage, setErrorMessage] = useState("");


    let response;

    useEffect(() => {
        getReimbursements();

    },[]);

    let getReimbursements = async () => {
        response = await fetch(`http://awsjoshua.duckdns.org:3000/reimbursement/index`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${props.currentUser?.token}`
            }
        })

        if (response.status === 200) {
            let result = await response.json();
            setErrorMessage("");
            setReimbursements(result);
        } else {
            setErrorMessage('Unable to retrieve reimbursements.');
        }

    }
    // let getResult = (() => {
    //     getReimbursements();
    //     console.log(reimbursements);
    // });
    // return is where things get rendered
    return (

        <>
        { props.currentUser ?
        <div className="reimbursement">
        <Button variant="contained" className="refreshButton" onClick={getReimbursements}>Refresh</Button>


            {/* <CreateReimbursements getReimbursements={getResult()}/> */}
            <CreateReimbursements className="ReimbursementCreate"/>



                        {
                            (reimbursements != undefined) ?

                            <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                              <TableHead>
                                <TableRow>
                                  <TableCell>Reimbursement ID</TableCell>
                                  <TableCell align="right">Description</TableCell>
                                  <TableCell align="right">Status</TableCell>
                                  <TableCell align="right">Amount</TableCell>
                                  <TableCell align="right">Created At</TableCell>
                                  <TableCell align="right">Updated At</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {reimbursements.map((item) => (
                                  <TableRow
                                    key={item.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                  >
                                    <TableCell component="th" scope="row">
                                      {item.id}
                                    </TableCell>
                                    <TableCell align="right">{item.description}</TableCell>
                                    <TableCell align="right">{item.status}</TableCell>
                                    <TableCell align="right">${item.amount}</TableCell>
                                    <TableCell align="right">{item.created_at}</TableCell>
                                    <TableCell align="right">{item.updated_at}</TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </TableContainer>
                            :
                            <></>
                        }
        </div>
        :
        <>
        <Navigate to="/login"/>
        </>
        }
        </>
    );
}
