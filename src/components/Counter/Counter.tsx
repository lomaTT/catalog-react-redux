import { useAppSelector, useAppDispatch } from "../../app/hooks.ts";
import {decrement, increment} from "../../features/counter/counterSlice.ts";

const Counter = () => {
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

    return (
        <>
        <p>{count}</p>
        <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </>
    );
}

export default Counter;