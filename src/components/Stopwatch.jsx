import { useState } from "react"

export const Stopwatch = () => {

    const [time, setTime] = useState({h:0, m:0, s:0, ms:0});
    const [status, setStatus] = useState(0);
    const [interv, setInterv] = useState();

    const run = () => {
        if(time.ms === 10){
            time.s++;
            time.ms = 0
        }

        if(time.s === 60){
            time.m++;
            time.s = 0;
        }

        if(time.m === 60){
            time.h++;
            time.m = 0;
        }

        time.ms++;

        return setTime({h:time.h, m:time.m, s:time.s, ms:time.ms});
    }

    function start () {
        setStatus(1);
        setInterv(setInterval(() =>{
            run();
        }, 100))
        
    }

    function stop () {
        clearInterval(interv);
        setStatus(0);
    }

    function reset () {
        clearInterval(interv);
        setTime({h:0, m:0, s:0, ms:0});
        setStatus(0);
    }

    return (
        <div className="container">
            <h1>Stopwatch</h1>
            <h2>
                <span>{time.h >= 10 ? time.h : "0" + time.h}</span>
                <span>:</span>
                <span>{time.m >= 10 ? time.m : "0" + time.m}</span>
                <span>:</span>
                <span>{time.s >= 10 ? time.s : "0" + time.s}</span>
                <span>:</span>
                <span>{time.ms >= 10 ? time.ms : "0" + time.ms}</span>
            </h2>
            
            <div id="btn_wrapper">
                {(status === 0 ? <button className="btn" onClick={start}>Start</button> : <button className="btn" onClick={stop}>Stop</button>)}

                <button className="btn" onClick={reset}>Reset</button>  
            </div>
            
        </div>
    )
}