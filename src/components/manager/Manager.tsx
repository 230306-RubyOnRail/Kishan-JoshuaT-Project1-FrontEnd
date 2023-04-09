import { Navigate } from "react-router-dom";
import { User } from "../../models/user";
import CreateUser from "./createUser";
import SpecificReimbursement from "./SpecificReimbursement";
import GetUsers from "./Users";
interface IManagerProps {
  currentUser: User | undefined;
}
export default function Manager(props: IManagerProps) {
  return props.currentUser ? (
    props.currentUser.account_type === "manager" ? (
        <>
      <h1>Manager</h1>
      <CreateUser />
      <br />
      <GetUsers />
      <br />
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
