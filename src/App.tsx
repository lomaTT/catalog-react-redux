import './App.css'
import Counter from "./components/Counter/Counter.tsx";
import {Provider} from "react-redux";
import {store} from "./app/store.ts";

function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <Provider store={store}>
                {/*<Counter/>*/}

            </Provider>
        </>
    )
}

export default App
