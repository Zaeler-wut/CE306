import React, { useState,useEffect } from "react";

const EmptyDependentcy: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const [name,setName] = useState<string>('');
    useEffect(() => {
        console.log('Empty Dependency Effect: Component re-rendersed!');
        console.log(`Current Count: ${count}, Current Name: ${name}`);

    });
    return (
        <div>
            <h2>Empty dependency Array Example</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment Count</button>
            <br />
            <p>Name: {name}</p>
            <input type="text" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}  placeholder="Enter younr name" />
        </div>
    );
};

export default EmptyDependentcy;