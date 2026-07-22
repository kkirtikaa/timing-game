import { useState , useRef } from "react";
export default function TimerChallenges({title,targetTime}){
    const timer = (useRef);

    const[timerStarted,setTimerStarted] = useState(false)
    const[timerExpired,setTimerExpired] = useState(false)

    function handleStart(){
        timer.current = setTimerStarted(true);
        setTimeout(() => {setTimerExpired(true)},targetTime * 1000);
         
    }

    function handleStop(){
        clearTimeOut(timer.current)

    }
    return(
        <section className ="challenge">
           <h2>{title}</h2>
           {timerExpired && <p>you lost</p>}
           <p className="challenge-time">
            {targetTime} second{targetTime >1 ? "s" :""}
            </p>
            <p>
                <button onClick={timerStarted ? handleStop : handleStart}>{timerStarted ? "Stop" : "Start"} Challenge</button>
            </p>
            <p className={timerStarted ? "active" : undefined}>
                {timerStarted ? "Timer is running..." :  "Timer inactive"}
            </p>
        </section>

    );
}