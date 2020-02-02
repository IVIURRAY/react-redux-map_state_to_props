import React from 'react';
import './Counter.css';

const Counter = props => {

    const { count } = props;

    return (
        <div className="counterContainer">
            <h1>{count}</h1>
        </div>
        
    )
}

export default Counter;