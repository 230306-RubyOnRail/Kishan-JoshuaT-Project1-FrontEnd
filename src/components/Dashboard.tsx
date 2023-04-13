import Stack from '@mui/material/Stack';
import { User } from '../models/user';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';


interface IDashboardProps {
    currentUser: User | undefined
}

export default function Dashboard(props:IDashboardProps) {
    useEffect (() => {
        console.log(props.currentUser?.id);
        console.log(props.currentUser?.username);

    }, []);
    return(
        props.currentUser ?
        <>
            <Stack direction="column" spacing={2} className='dashboard'>
                <h2>Dashboard</h2>
                <p>Hello {props.currentUser.username}.</p>
                <p>You're id is {props.currentUser.id}, and you're a {props.currentUser.account_type}</p>
            </Stack>
        </>
        :
        <>
            <Navigate to="/login" />
        </>
    );
}
