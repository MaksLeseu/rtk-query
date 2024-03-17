import {useState} from "react";
import {CreateUserArgsType, useCreateUserMutation} from "../../service/base-api";
import './CreateUser.css'



export const CreateUser = () => {
    const [createUser, response] = useCreateUserMutation()

    const [user, setUser] = useState<CreateUserArgsType>({
        name: '',
        job: '',
    })

    const changeUserData = (param: 'name' | 'job', e: any) => {
        const obj = {
            'name': () => {
                setUser({
                    ...user, name: e.currentTarget.value
                })
            },
            'job': () => {
                setUser({
                    ...user, job: e.currentTarget.value
                })
            }
        }

        return obj[param]()
    }

    const sendUserData = () => {
        createUser(user)
        setUser({
            name: '', job: ''
        })
    }

    return (
        <div>
            <div className={'form'}>
                <input value={user.name} placeholder={'Name'} onChange={(e) => changeUserData('name', e)}/>
                <input value={user.job} placeholder={'Job'} onChange={(e) => changeUserData('job', e)}/>
                <button disabled={user.name.length === 0 || user.job.length === 0} onClick={sendUserData}>Send data</button>
            </div>
            {
                response.status === 'fulfilled' ?
                <>
                    <p>The user was creating.</p>
                    <p>Name: {response.data['name']}</p>
                    <p>Job: {response.data['job']}</p>
                    <p>Id: {response.data['id']}</p>
                    <p>Date: {response.data['createdAt']}</p>
                </>
                    :
                    <p>nothing</p>
            }
        </div>
    );
};