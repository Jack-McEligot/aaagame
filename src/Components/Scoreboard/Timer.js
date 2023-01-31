import React, {useState} from 'react';
import './Timer.css'
const Timer = () => {
    const [elapsedTime, setElapsedTime] = useState(0);
    // const[startTime, setStartTime] = useState(Date.now());
    

    let mins = Math.floor(elapsedTime/6000);
    let secs = Math.floor(elapsedTime/100);
    let ms = Math.floor(elapsedTime);
    
    React.useEffect(() => {
        let interval = null;
        interval = setInterval(() => {
            setElapsedTime(prevTime => prevTime + 1);
        }, 1)
        return () => clearInterval(interval);
    })
    return (
        <div className='scoreboard__timer'>
            {/* <h2>{'' + ((elapsedMins > 9) ? ('' + elapsedMins) : ('0' + elapsedMins)) + ':' + ((elapsedSecs > 9) ? ('' + elapsedSecs) : ('0' + elapsedSecs))}</h2> */}
            <h2>{('' + ('0'+ mins).slice(-2) + ':'+ ('0'+ secs).slice(-2) + ':' + ('0'+ ms).slice(-2))}</h2>
        </div>
    )
}

export default Timer;