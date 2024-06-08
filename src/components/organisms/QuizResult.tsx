import QuizButton from "../atoms/QuizButton";

type Props = {
  result: number;
  onTryAgain: () => void;
  onReview: () => void;
};

const QuizResult = ({ result, onReview, onTryAgain }: Props) => {
  return (
    <div className="animation pt-50">
      <h1 className="quiz__result text-center mb-20">
        Your score is: <span className="fw-bold-700">{result}</span>
      </h1>

      <div className="flex justify-center ">
        <QuizButton
          text="Try Again"
          onClick={onTryAgain}
          className="try-again-btn mr-20"
        />
        <QuizButton text="Review" onClick={onReview} className="review-btn" />
      </div>
    </div>
  );
};

export default QuizResult;
