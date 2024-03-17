import './User.css'
import {useGetUserQuery} from "../../service/base-api";
import {useState} from "react";

export const User = () => {
    const [userId, setUserId] = useState<number | null>(null)
    const {data} = useGetUserQuery({id: userId})

    const [number, setNumber] = useState<number | null>(null)

    const changeUserId = (e: any) => setNumber(e.currentTarget.value)
    const sendUserId = () => {
        setUserId(number)
        setNumber(null)
    }

    return (
        <>
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
                    : 'Empty'}</table>
            <div className={'form'}>
                <input type={"number"} value={number ?? ''} onChange={changeUserId}/>
                <button disabled={!number || number > 12 || number < 1} onClick={sendUserId}>Find a user.</button>
            </div>
        </>
    );
};