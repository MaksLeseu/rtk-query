import './App.css'
import {useGetUsersQuery} from "./service/base-api";
import {Preloader} from "./Components/Preloader";

export function App() {
    const {data, isLoading} = useGetUsersQuery()

    if (isLoading) {
        return (
            <div className={'preloader'}>
                <Preloader />
            </div>
        )
    }

    return (
            <div className={'container'}>
                <table className={'table'}>
                    <tr className={'headerTable'}>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Email</th>
                        <th>Icon</th>
                    </tr>
                    {data ?
                    data.data.map((us, id) => (
                        <tr key={id}>
                            <th className={'firstName'}>{us['first_name']}</th>
                            <th className={'lastName'}>{us['last_name']}</th>
                            <th className={'email'}>{us['email']}</th>
                            <th className={'iconContainer'}>
                                <img src={us['avatar']}/>
                            </th>
                        </tr>
                    ))
                    : 'Mistake!!!'}</table>
            </div>
        )
}
