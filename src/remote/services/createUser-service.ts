import { authAppClient } from "../authenticated-app-client";

export const createUser = async (name: string, username: string, password: string, account_type: string) => {
    return await authAppClient.post(`/user/create`, {
        name: name,
        username: username,
        password: password,
        account_type: account_type
    })
}
