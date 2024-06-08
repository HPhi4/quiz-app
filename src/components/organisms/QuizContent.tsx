import { useState, useCallback } from "react";
import { Question } from "../../types/Quiz";
import { QUESTIONS } from "../../../public/assets/dummy-data/questions";
import QuizResult from "./QuizResult";
import CountdownTimer from "../molecules/CountDownTimer";
import QuizQuestion from "../molecules/QuizQuestion";
import QuizAnswers from "../molecules/QuizAnswers";
import QuizButtonList from "../molecules/QuizButtonList";
import AlertModal from "../molecules/AlertModal";

const QuizContent = () => {
  const [questions] = useState<Question[]>(QUESTIONS);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [rightAnswerCount, setRightAnswerCount] = useState<number>(0);
  const [isShowResults, setIsShowResults] = useState<boolean>(false);
  const [isReviewMode, setIsReviewMode] = useState<boolean>(false);
  const [isShowAlertModal, setIsShowAlertModal] = useState<boolean>(false);

  const handleNavigateQuestion = (action: string) => {
    switch (action) {
      case "previous":
        if (questionIndex > 0) {
          setQuestionIndex((prevIndex) => prevIndex - 1);
        }
        break;
      case "next":
        if (questionIndex < questions.length - 1) {
          setQuestionIndex((prevIndex) => prevIndex + 1);
        }
        break;
    }
  };

  const saveUserAswer = (choosedAnswer: string) => {
    if (isReviewMode) {
      alert("you are not allow to choose in review mode");
      return;
    } else {
      setSelectedAnswers((preAnswers) => {
        preAnswers[questionIndex] = choosedAnswer;
        const newAnswers = [...preAnswers];

        return newAnswers;
      });
    }
  };

  const showAlertModal = () => {
    setIsShowAlertModal(true);
  };

  const submitAnswers = useCallback(() => {
    let count: number = 0;
    const rightAnswers = questions
      .map((question) => {
        return question.answers.filter((answer) => answer.correct);
      })
      .flat();

    rightAnswers.forEach((rightAns, index) => {
      if (rightAns.answer_content === selectedAnswers[index]) {
        count++;
      }
    });

    setRightAnswerCount(count);
    setIsShowResults(true);
  }, [questions, selectedAnswers]);

  const reviewResults = () => {
    setIsReviewMode(true);
    setIsShowResults(false);
    setQuestionIndex(0);
    setIsShowAlertModal(false);
  };

  const tryQuizAgain = () => {
    window.location.reload();
  };

  return isShowResults ? (
    <QuizResult
      result={rightAnswerCount}
      onReview={reviewResults}
      onTryAgain={tryQuizAgain}
    />
  ) : (
    <div className="animation h-100vh">
      <div className="flex justify-center gap-20 pt-50 pb-70 mw-800 m-auto quiz__button-list">
        <QuizButtonList
          questions={questions}
          questionIndex={questionIndex}
          isReviewMode={isReviewMode}
          handleNavigateQuestion={handleNavigateQuestion}
          submitAnswers={showAlertModal}
          tryQuizAgain={tryQuizAgain}
        />
      </div>
      {isShowAlertModal && (
        <AlertModal
          title="Confirm Submit"
          description="Do you want to submit your answer?"
          onSubmit={submitAnswers}
          onCancel={() => setIsShowAlertModal(false)}
        />
      )}
      <div className="quiz mw-800 m-auto">
        <div className="quiz__question text-center mb-20">
          <CountdownTimer
            className="quiz__countdown-timer"
            onTimeUp={submitAnswers}
            isReviewMode={isReviewMode}
          />
          <QuizQuestion index={questionIndex} questions={questions} />
        </div>

        <QuizAnswers
          index={questionIndex}
          isReviewMode={isReviewMode}
          questions={questions}
          saveUserAswer={saveUserAswer}
          selectedAnswers={selectedAnswers}
        />
      </div>
    </div>
  );
};

export default QuizContent;
