import './App.css'
import {Users} from "./Components/Users/Users";
import {User} from "./Components/User/User";

export function App() {

    return (
            <div className={'container'}>
                <div>
                    <h2>Users:</h2>
                    <Users />
                </div>
                <div>
                    <h2>User:</h2>
                    <User />
                </div>
            </div>
        )
}
