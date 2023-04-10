import { Link } from "react-router-dom";

export default function ManagerNav() {
    return (
        <div className="managerNav">
        <h1>Manager Nav</h1>

        <Link to="/manager/allusers">Get Users</Link>

        </div>
    );
}
