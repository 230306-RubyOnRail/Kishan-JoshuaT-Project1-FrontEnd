import { Navigate } from "react-router-dom";
import { User } from "../../models/user";
import CreateUser from "./createUser";
import SpecificReimbursement from "./SpecificReimbursement";
import GetUsers from "./Users";
import ManagerNav from "./ManagerNav";
import DeleteReimbursement from "../deleteReimbursement";
import UpdateReimbursementManager from "./updateReimbursement";
interface IManagerProps {
  currentUser: User | undefined;
  setUserID: (userID: number) => void;
}
export default function Manager(props: IManagerProps) {
  return props.currentUser ? (
    props.currentUser.account_type === "manager" ? (
        <>
        <ManagerNav />
      <h2>Manager</h2>
      <h4>Create User</h4>
      <CreateUser />
      <br />
      <h3>Reimbursements from a User</h3>
      <SpecificReimbursement setUserID={props.setUserID}/>
      <UpdateReimbursementManager />
      <DeleteReimbursement />
      </>
    ) : (
      <>
        <h1>Not a manager</h1>
        <Navigate to="/" />
      </>
    )
  ) : (
    <>
      <h1>Not a manager</h1>
      <Navigate to="/login" />
    </>
  );
}
