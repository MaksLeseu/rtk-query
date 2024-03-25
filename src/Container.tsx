import {Users} from "./Components/Users/Users";
import {User} from "./Components/User/User";
import {CreateUser} from "./Components/CreateUser/CreateUser";
import {DeleteUser} from "./Components/DeleteUser/DeleteUser";
import {UpdateUser} from "./Components/UpdateUser/UpdateUser";
import './App.css'
import {Decks} from "./Components/Decks/Decks";

export const Container = () => {
    return (
        <div className={'container'}>
            <div className={'block'}>
                <h2>Users:</h2>
                <Users />
            </div>
            <div className={'block'}>
                <h2>User:</h2>
                <User />
            </div>
            <div className={'block'}>
                <h2>Create a User:</h2>
                <CreateUser />
            </div>
            <div className={'block'}>
                <h2>Delete the user:</h2>
                <DeleteUser />
            </div>
            <div className={'block'}>
                <h2>Update the user:</h2>
                <UpdateUser />
            </div>
        </div>
    );
};