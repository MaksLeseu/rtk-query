import './App.css'
import {useGetUsersQuery} from "./service/base-api";
import {Preloader} from "./Components/Preloader";

export function App() {
    const {data, isLoading, isError} = useGetUsersQuery()

    if (isLoading) {
        return (
            <div className={'preloader'}>
                <Preloader />
            </div>
        )
    }
    return (
        <div className={'container'}>
            <div>{data ?
                data.data.map((us, id) => (
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
