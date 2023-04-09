import { useEffect, useState } from "react";
import { getAllUsers as getAll } from "../../remote/services/getallusers-service";
import { User } from "../../models/user";
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
            {
                users?.map((user) => {
                    return (
                        <div>
                            <p>Username: {user.username}, User ID: {user.id}</p>


                        </div>
                    )
                })
            }
        </div>
    );
}
