import { useState, useRef } from "react";
import ResultModel from "./ResultModel";
export default function TimerChallenges({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef(); {/*dialog tag is invisible thats why we are usins ref  */}

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.showModal();
    }, targetTime * 1000);
  }

  function handleStop() {
    clearTimeOut(timer.current);
  }
  return (
    <>
      
        <ResultModel ref={dialog} targetTime={targetTime} result="Lost" />
      
      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>you lost</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Timer is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
