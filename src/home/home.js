import axios from "axios";
import {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {increment, decrement} from "../redux/action";

export default function Home(){
    const counter = useSelector((state) => state.counterReducer);
    const dispatch = useDispatch();

    return (
        <div>
            <h3>Counter</h3>
            <h3>{counter}</h3>
            <button onClick={() => dispatch(increment())}>Increase</button>
            <button onClick={() => dispatch(decrement())}>Decrease</button>


        </div>
    )
}