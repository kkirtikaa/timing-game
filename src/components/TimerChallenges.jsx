import { useState, useRef, useEffect } from "react";
import ResultModel from "./ResultModel";

export default function TimerChallenges({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsActive =
    timeRemaining > 0 && timeRemaining < targetTime * 1000;

  useEffect(() => {
    if (timeRemaining <= 0) {
      clearInterval(timer.current);
      timer.current = null;
      setTimeRemaining(0);
      dialog.current.showModal();
    }
  }, [timeRemaining]);

  function handleStart() {
    if (timer.current) return;

    setTimeRemaining(targetTime * 1000);

    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => {
        if (prevTimeRemaining <= 10) {
          clearInterval(timer.current);
          timer.current = null;
          return 0;
        }

        return prevTimeRemaining - 10;
      });
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    timer.current = null;
    dialog.current.showModal();
  }

  return (
    <>
      <ResultModel
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
      />

      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>

        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>

        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Timer is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}