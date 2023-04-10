import { User } from '../models/user';
import { Navigate } from 'react-router-dom';


interface IDashboardProps {
    currentUser: User | undefined
}

export default function Dashboard(props:IDashboardProps) {
    return(
        props.currentUser ?
        <>
            Hello {props.currentUser.username} token: {props.currentUser.token}. You're id is {props.currentUser.id}, and you're a {props.currentUser.account_type}
        </>
        :
        <>
            <Navigate to="/login" />
        </>
    );
}
