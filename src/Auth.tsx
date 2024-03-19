import './App.css'

export const Auth = () => {
    return (
        <div className={'auth'}>
            <input placeholder={'Login'}/>
            <input placeholder={'Password'}/>
            <button>Login</button>
        </div>
    );
};