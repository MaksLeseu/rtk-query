import './App.css'
import {LoginType, useLoginMutation} from "./service/auth.service";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {BASE_ROUTE} from "./routes/Routes";

export const Auth = () => {
    const navigate = useNavigate()

    const [login] = useLoginMutation()
    const [auth, setAuth] = useState<LoginType>({
        email: '',
        password: '',
        rememberMe: false
    })

    const changeAuth = (params: 'email' | 'password' | 'rememberMe', e: any) => {
        const obj = {
            'email': () => {
                setAuth({
                    ...auth, email: e.currentTarget.value
                })
            },
            'password': () => {
                setAuth({
                    ...auth, password: e.currentTarget.value
                })
            },
            'rememberMe': () => {
                setAuth({
                    ...auth, rememberMe: !auth.rememberMe
                })
            },
        }
        return obj[params]()
    }

    const handleLogin = async () => {
        try {
            await login(auth)
            navigate(`${BASE_ROUTE}`)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className={'auth'}>
            <input placeholder={'Email'} value={auth.email} onChange={(e) => changeAuth('email', e)}/>
            <input placeholder={'Password'} value={auth.password} onChange={(e) => changeAuth('password', e)} type={'password'}/>
            <div><input type={'checkbox'} />remember me</div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};