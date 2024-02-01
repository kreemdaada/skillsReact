import React, {useState, useEffect} from 'react';

const Counter = ({initialCount,step }) =>{
const [count, setCount] = useState(initialCount);
useEffect(()=>{
    console.log("component hat mounted");
    
    return ()=>{
        console.log("component hat unmounted");
    }
},[])

return(
    <>
    <h2>Counter {count}</h2>
    <button onClick={() => setCount(count + 1)}>Increment by {step}</button>
    <button onClick={() => setCount(count - 1)}>Decrement by {step}</button>
    </>
);
};
export default Counter;