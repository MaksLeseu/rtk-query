import './DeleteUser.css'
import {useState} from "react";
import {useDeleteUserMutation} from "../../service/base-api";

export const DeleteUser = () => {
    const [deleteUser, response] = useDeleteUserMutation()

    const [userId, setUserId] = useState<number | undefined>(undefined)

    const changeUserId = (e: any) => setUserId(e.currentTarget.value)
    const deleteUserHandler = () => deleteUser({id: userId})

    return (
        <div className={'form'}>
            <input type={"number"} placeholder={'User id'} value={userId} onChange={changeUserId}/>
            <button disabled={userId < 1 || !userId} onClick={deleteUserHandler}>Delete the user.</button>
            {
                response.isSuccess
                    &&
                <p>The user has been deleted.</p>
            }
        </div>
    );
};