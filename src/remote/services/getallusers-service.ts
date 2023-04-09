import { authAppClient } from "../authenticated-app-client";

export const getAllUsers = async () => {
    return await authAppClient.get(`/user/index`);
}
