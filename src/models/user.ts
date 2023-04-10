export interface IUser{
    user_id: number,
    username: string,
    account_type: string,
    token: string
}

export type UserType = {
    user_id: number;
    username: string;
    account_type: string;
    token: string;
}

export class User {
    id: number;
    username: string;
    account_type: string;
    token: string;

    constructor(id: number, username: string, account_type: string, token: string) {
        this.id = id;
        this.username = username;
        this.account_type = account_type;
        this.token = token;
    }
}
