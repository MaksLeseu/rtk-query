import './App.css'
import {useLoginMutation} from "./service/auth.service";

export const Auth = () => {
    const [login] = useLoginMutation()

    const loginHandler = () => login({
        email: 'iteishnik@gamil.com',
        password: 'qazwsxedc',
        rememberMe: false
    })

    return (
        <div className={'auth'}>
            <input placeholder={'Login'}/>
            <input placeholder={'Password'} type={'password'}/>
            <div><input type={'checkbox'} />remember me</div>
            <button onClick={loginHandler}>Login</button>
        </div>
    );
};