import './User.css'
import {useGetUserQuery} from "../../service/base-api";

export const User = () => {
    const {data} = useGetUserQuery()

    return (
        <table className={'table'}>
            <tr className={'headerTable'}>
                <th>First name</th>
                <th>Last name</th>
                <th>Email</th>
                <th>Icon</th>
            </tr>
            {data ?
                    <tr>
                        <th className={'firstName'}>{data.data['first_name']}</th>
                        <th className={'lastName'}>{data.data['last_name']}</th>
                        <th className={'email'}>{data.data['email']}</th>
                        <th className={'iconContainer'}>
                            <img src={data.data['avatar']}/>
                        </th>
                    </tr>
                : 'Mistake!!!'}</table>
    );
};