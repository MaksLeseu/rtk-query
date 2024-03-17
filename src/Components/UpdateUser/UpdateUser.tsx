import './UpdateUser.css'
import {useState} from "react";
import {CreateUserArgsType, useUpdateUserMutation} from "../../service/base-api";


export const UpdateUser = () => {
    const [updateUser, response] = useUpdateUserMutation()
    console.log(response)

    const [userId, setUserId] = useState<number | undefined>(undefined)
    const [user, setUser] = useState<CreateUserArgsType>({
        name: '',
        job: '',
    })

    const changeInputValue = (param: 'name' | 'job' | 'id',  e: any) => {
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
            },
            'id': () => {
                setUserId(e.currentTarget.value)
            }
        }

        return obj[param]()
    }

    const updateUserHandler = () => {
        updateUser({id: userId, params: user})
        setUser({
            name: '',
            job: '',
        })
    }

    return (
        <div className={'container'}>
            <div>
                <input
                    type={"number"}
                    value={userId}
                    placeholder={'The user id'}
                    className={'userId'}
                    onChange={(e) => changeInputValue('id', e)}
                />
            </div>
            <div className={'form'}>
                <input value={user.name} placeholder={'Name'} onChange={(e) => changeInputValue('name', e)}/>
                <input value={user.job} placeholder={'Job'} onChange={(e) => changeInputValue('job', e)}/>
                <button
                    disabled={!userId || !user.name || !user.job}
                    onClick={updateUserHandler}
                >
                    Update the user.
                </button>
                <>
                    {
                        response.status === 'fulfilled' && response.isSuccess ?
                            <div>
                                <p>Name: {response.data['name']}</p>
                                <p>Job: {response.data['job']}</p>
                                <p>Date: {response.data['updatedAt']}</p>
                            </div>
                            :
                            'nothing'
                    }
                </>
            </div>
        </div>
    );
};
