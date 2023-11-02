import React, { useState } from 'react';


function ParentComponent() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Shared Count in Parent: {count}</h1>
            <SiblingA count={count} setCount={setCount} />
            <SiblingB count={count} setCount={setCount} />
        </div>
    );
}

function SiblingA({ count, setCount }) {
    return (
        <div>
            <h2>Count in SiblingA: {count}</h2>
            <button onClick={() => setCount(count + 1)}>
                Increment Count from SiblingA
            </button>
        </div>
    );
}

function SiblingB({ count, setCount }) {
    return (
        <div>
            <h2>Count in SiblingB: {count}</h2>
            <button onClick={() => setCount(count - 1)}>
                Decrement Count from SiblingB
            </button>
        </div>
    );
}

export default ParentComponent;