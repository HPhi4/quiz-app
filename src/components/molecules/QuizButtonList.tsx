import { Question } from "../../types/Quiz";
import QuizButton from "../atoms/QuizButton";

interface QuizButtonListProps {
  questions: Question[];
  questionIndex: number;
  isReviewMode: boolean;
  handleNavigateQuestion: (action: string) => void;
  submitAnswers: () => void;
  tryQuizAgain: () => void;
}

const QuizButtonList = ({
  questions,
  questionIndex,
  isReviewMode,
  handleNavigateQuestion,
  submitAnswers,
  tryQuizAgain,
}: QuizButtonListProps) => {
  return (
    <>
      <QuizButton
        text="Previous"
        className={`w-25percent ${
          questionIndex === 0 ? "disabled-pre-btn" : "pre-btn"
        }`}
        onClick={() => handleNavigateQuestion("previous")}
        disabled={questionIndex === 0}
      />
      <QuizButton
        text="Next"
        className={`w-25percent ${
          questionIndex === questions.length - 1
            ? "disabled-next-btn"
            : "next-btn"
        }`}
        onClick={() => handleNavigateQuestion("next")}
        disabled={questionIndex >= questions.length - 1}
      />
      <QuizButton
        text="Submit"
        className={`submit-btn w-25percent ${
          questionIndex < questions.length - 1 || isReviewMode
            ? "d-none"
            : "d-block"
        }`}
        onClick={submitAnswers}
      />
      {isReviewMode && (
        <QuizButton
          text="Restart"
          className={`submit-btn w-25percent`}
          onClick={tryQuizAgain}
        />
      )}
    </>
  );
};

export default QuizButtonList;
