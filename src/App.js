import "./App.css";
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

function App() {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    // const [val, setVal] = useState(0);
    // useEffect(() => {setVal(counter);
    // console.log(val);},[counter]);
    

  return <div className="flex-center">
      <button className="btn-inc" onClick={() => dispatch({type: "INCREMENT", "payload" : 1})}>+</button>
      <strong className="count-number">{counter}</strong>
      <button className="btn-dcr" onClick={() => dispatch({type: "DECREMENT"})}>-</button>
  </div>;
}

export default App;
