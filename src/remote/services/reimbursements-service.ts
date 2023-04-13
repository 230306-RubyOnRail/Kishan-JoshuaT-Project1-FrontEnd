import { authAppClient } from "../authenticated-app-client";

export const getListReimbursement = async (userId: number) => {
    return await authAppClient.get(`/reimbursement/show/${userId}`);
}

export const createReimburse = async (description: string, amount: string) => {
    return await authAppClient.post(`/reimbursement/create/`,{
        description: description,
        amount: amount,
        status: "pending"
    })
}

export const updateReimburse = async (description: string, amount: string, id: number) => {
    return await authAppClient.put(`/reimbursement/update/${id}`, {
        description: description,
        amount: amount
    })
}

export const deleteReimburse = async (id: number) => {
    return await authAppClient.delete(`/reimbursement/delete/${id}`)
}