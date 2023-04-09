import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { User } from "../models/user";
import "../styles/NavStyle.css"

interface INavProps {
  currentUser: User | undefined;
  setCurrentUser: (user: User | undefined) => void;
}

export default function Nav(props: INavProps) {
  if (props.currentUser) {
    var x = props.currentUser.account_type === "manager";
  } else {
    var x = false;
  }
  let logout = () => {
    props.setCurrentUser(undefined);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employee Reimbursement System
          </Typography>
          {x ? (
            <>
              <Button color="inherit" className="link">
                <Link to="/manager" className="link">Manager</Link>
              </Button>
            </>
          ) : (
            <></>
          )}
          <Button color="inherit">
            <Link to="/reimbursement" className="link">Reimbursement</Link>
          </Button>
          {props.currentUser ? (
            <Button color="inherit" onClick={logout}>
              <Link to="/login"  className="link">Destroy</Link>
            </Button>
          ) : (
            <Button color="inherit">
              <Link to="/login" className="link">Login</Link>{" "}
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
