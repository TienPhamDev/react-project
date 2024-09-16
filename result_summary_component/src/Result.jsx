import "./css/result.css";
export const Result = () => {
  return <div className='result'>
    <h2>Your Result</h2>
    <div className='score-container'>
      <span className='score'>75</span>
      <span>of 100</span>
    </div>
    <h5>Great</h5>
    <p>Your scored higher than 65% of people who have taken these tests.</p>
  </div>;
};
