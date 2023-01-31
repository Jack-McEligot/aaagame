import React from 'react';
import './PointTracker.css'
const PointTracker = (props) => {
    const incrementPoint = () => {
        props.changePoint(1);
    }
    return (
        <div className='scoreboard__points'>
            <h2 style={{'color':props.color}}>{props.value}</h2>
            {/* <button onClick={incrementPoint}>Click me</button> */}
        </div>
    )
}

export default PointTracker;