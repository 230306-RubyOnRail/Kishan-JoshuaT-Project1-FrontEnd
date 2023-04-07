import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { User } from "../models/user";
import { Link } from "react-router-dom";

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
            News
          </Typography>
          {x ? (
            <>
              <Button color="inherit">Manager</Button>
            </>
          ) : (
            <></>
          )}
          <Button color="inherit">
            <Link to="/reimbursement">Reimbursement</Link>
          </Button>
          {props.currentUser ?
            <Button color="inherit" onClick={logout}>
              <Link to="/login">Destroy</Link>
            </Button>
            :
            <Button color="inherit">
            <Link to="/login">Login</Link>{" "}
          </Button>
        }
        </Toolbar>
      </AppBar>
    </Box>
  );
}
