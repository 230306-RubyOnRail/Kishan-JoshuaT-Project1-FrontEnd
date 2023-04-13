import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import '../../styles/NavStyle.css'

export default function ManagerNav() {
    return (
        <div className="managerNav">
        <h2>Manager Nav</h2>
        <Button variant="contained" className="link">
            <Link to="/manager/allusers" className="link">Get Users</Link>
        </Button>


        </div>
    );
}
