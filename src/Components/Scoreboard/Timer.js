import React, {useEffect, useState} from 'react';
import './Timer.css'
const Timer = () => {
    const [elapsedTime, setElapsedTime] = useState(0);
    // const[startTime, setStartTime] = useState(Date.now());
    
    
    let mins = Math.floor(elapsedTime/60000);
    let secs = Math.floor(elapsedTime/1000);
    let ms = Math.floor(elapsedTime/100);
    
    React.useEffect(() => {
        let interval = null;
        interval = setInterval(() => {
            setElapsedTime(prevTime => prevTime + 100);
        }, 100)
        return () => clearInterval(interval);
    })
    return (
        <div>
            {/* <h2>{'' + ((elapsedMins > 9) ? ('' + elapsedMins) : ('0' + elapsedMins)) + ':' + ((elapsedSecs > 9) ? ('' + elapsedSecs) : ('0' + elapsedSecs))}</h2> */}
            <h2>{('' + ('0'+ mins).slice(-2) + ':'+ ('0'+ secs).slice(-2) + ':' + (''+ ms).slice(-1))}</h2>
        </div>
    )
}

export default Timer;