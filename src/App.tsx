import { Provider } from 'react-redux'
import {store} from "./service/store";
import './App.css'

export function App() {
    return (
        <Provider store={store}>
            <div className={'container'}>
                <p className={'text'}>asdasd</p>
            </div>
        </Provider>
    )
}
