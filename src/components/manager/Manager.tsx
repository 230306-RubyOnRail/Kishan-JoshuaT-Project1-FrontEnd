import { Navigate } from "react-router-dom";
import { User } from "../../models/user";
import CreateUser from "./createUser";
import SpecificReimbursement from "./SpecificReimbursement";
import GetUsers from "./Users";
import ManagerNav from "./ManagerNav";
interface IManagerProps {
  currentUser: User | undefined;
}
export default function Manager(props: IManagerProps) {
  return props.currentUser ? (
    props.currentUser.account_type === "manager" ? (
        <>
        <ManagerNav />
      <h2>Manager</h2>
      <p>Create User</p>
      <CreateUser />
      <br />
      <p>Reimbursements from a User</p>
      <SpecificReimbursement />
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
