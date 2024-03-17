import './App.css'
import {Users} from "./Components/Users/Users";
import {User} from "./Components/User/User";
import {CreateUser} from "./Components/CreateUser/CreateUser";
import {DeleteUser} from "./Components/DeleteUser/DeleteUser";

export function App() {

    return (
            <div className={'container'}>
                <div className={'users'}>
                    <h2>Users:</h2>
                    <Users />
                </div>
                <div className={'user'}>
                    <h2>User:</h2>
                    <User />
                </div>
                <div className={'createUser'}>
                    <h2>Create a User:</h2>
                    <CreateUser />
                </div>
                <div>
                    <h2>Delete the user:</h2>
                    <DeleteUser />
                </div>
            </div>
        )
}
