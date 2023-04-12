import { useEffect, useState } from "react";
import { getAllUsers as getAll } from "../../remote/services/getallusers-service";
import { AllUser as User } from "../../models/user";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Link } from "react-router-dom";
import '../../styles/NavStyle.css'
export default function GetUsers() {

    const [users, setUsers] = useState<User[] | undefined>(undefined);

    useEffect (() => {
        getAllUsers();
    }, []);

    let getAllUsers = async () => {
        try {
            let response = await getAll();
            if (response.status === 200) {
                console.log(response.data);
                setUsers(response.data);

            }
        } catch (err) {
            console.log(err);

        }

    }
    return (
        <div>
             <Button variant="contained" className="link"><Link to="/manager" className="link">Back</Link></Button>
            {

                    <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 350 }} aria-label="simple table">
                              <TableHead>
                                <TableRow>
                                  <TableCell>ID</TableCell>
                                  <TableCell align="left">Name</TableCell>
                                  <TableCell align="left">Username</TableCell>

                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {users?.map((item) => (
                                  <TableRow
                                    key={item.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                  >
                                    <TableCell component="th" scope="row">
                                      {item.id}
                                    </TableCell>
                                    <TableCell align="left">{item.name}</TableCell>
                                    <TableCell align="left">{item.username}</TableCell>

                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </TableContainer>
            }
        </div>
    );
}
