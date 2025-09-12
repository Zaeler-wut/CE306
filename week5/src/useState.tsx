import React,{useState} from 'react';

interface CountProps {
    initiaCount? : number;
}

const Counter : React.FC<CountProps> = ({initiaCount = 0}) => {
    const [count,setCount] = useState<number>(initiaCount);
    const [name, setname] = useState<string>('');
    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (
       <div>
        <h1>Count : {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Dercrement</button>
        <h2>Your Name: {name}</h2>
        <input type="text" value={name} onChange={(e) => setname(e.target.value)} />
       </div>
    )
}

export default Counter;