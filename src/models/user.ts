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
    user_id: number;
    username: string;
    account_type: string;
    token: string;

    constructor(user_id: number, username: string, account_type: string, token: string) {
        this.user_id = user_id;
        this.username = username;
        this.account_type = account_type;
        this.token = token;
    }
}