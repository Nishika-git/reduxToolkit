import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./features/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <main>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>+ </button>
      <br />
      <button onClick={() => dispatch(decrement())}>- </button>
      <br />
      <button onClick={() => dispatch(reset())}>reset</button>
      <br />
      <button onClick={() => dispatch(incrementByAmount(5))}>Add 5 </button>
    </main>
  )
}

export default App
