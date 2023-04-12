import { useEffect, useState } from "react";
import { getListReimbursement } from "../../remote/services/reimbursements-service";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { Reimbursement as Reimbursement_Model } from "../../models/reimbursement";

interface IListReimbursementProps {
    userID: number;
}

export default function ListReimbursement(props: IListReimbursementProps) {

    const [reimbursements, getReimbursementList] = useState<Reimbursement_Model[] | undefined>(undefined);

    useEffect (() => {
        getList();
    }, []);

    let getList = async () => {
        try {
            let response = await getListReimbursement(props.userID);
            if (response.status === 200) {
                let data = await response.data;
                getReimbursementList(data);

            }

        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <h1>List Reimbursement of {props.userID}, </h1>
            {
                            (reimbursements != undefined) ?

                            <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                              <TableHead>
                                <TableRow>
                                  <TableCell>Reimbursement ID</TableCell>
                                  <TableCell align="right">Description</TableCell>
                                  <TableCell align="right">Status</TableCell>
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
    );
}
