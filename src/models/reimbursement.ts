export class Reimbursement {
    description: string;
    amount: string;
    status: string;
    created_at: string;
    updated_at: string;
    id: number;
    user_id: number;

    constructor(description: string, amount:string, status: string, created_at: string, updated_at: string, id: number, user_id: number) {
        this.description = description;
        this.amount = amount;
        this.status = status;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.id = id;
        this.user_id = user_id;
    }
}