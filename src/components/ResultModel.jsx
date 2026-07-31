import { forwardRef } from "react";
import {createPortal} from "react-dom";

const ResultModel = forwardRef(function ResultModel(
  { targetTime, remainingTime },
  ref
) {
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  return createPortal(
    <dialog ref={ref} className="result-modal">
      <h2>{userLost ? "You Lost" : "You Won"}</h2>

      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>

      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainingTime} seconds left.</strong>
      </p>

      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModel;