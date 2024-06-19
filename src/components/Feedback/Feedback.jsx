export default function Feedback({
  feedback,
  totalFeedback,
  positiveFeedbackPercentage,
}) {
  return (
    <div>
      <h2>Feedback Statistics</h2>
      <ul>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive Feedback: {positiveFeedbackPercentage}%</li>
      </ul>
    </div>
  );
}
