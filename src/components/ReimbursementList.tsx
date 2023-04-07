interface IReimbursementListProps {
    id: number,
    description: string,
    amount: string,
    status: string,
    user_id: number,
    created_at: string,
    updated_at: string
}

export default function ReimbursementList(props: IReimbursementListProps) {
    return(
        <tr className={props.status}>
            <th>{props.id}</th>
            <td>{props.description}</td>
        </tr>
    );
}