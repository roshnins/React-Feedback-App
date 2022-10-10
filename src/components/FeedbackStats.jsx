import React from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  // Calculate rating average with 'reduce' array methid
  // Reduce takes in accumulator (acc) and current value (current)
  let average =
    feedback.reduce((acc, current) => {
      return acc + current.rating;
    }, 0) / feedback.length;

  // round to 1 dp but removes trailing zero
  average = average.toFixed(1).replace(/[.,]0$/, "");
  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;
