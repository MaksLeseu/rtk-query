import './App.css'
import {useGetUsersQuery} from "./service/base-api";

export function App() {
    const users = useGetUsersQuery()

    return (
        <div className={'container'}>
            <div>{users ?
                users.data?.data.map((us, id) => (
                    <div key={id} className={'users'}>
                        {us['id']}.
                        <div>
                            <div className={'text'}>
                                <p className={'firstName'}>{us['first_name']}</p>
                                <p className={'lastName'}>{us['last_name']}</p>
                            </div>
                            <div>
                                <img src={us['avatar']}/>
                            </div>
                        </div>
                    </div>
                ))
                : 'Mistake!!!'}</div>
        </div>
    )
}
