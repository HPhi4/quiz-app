import React from "react";
import { Answer, Question } from "../../types/Quiz";

interface QuizAnswersProps {
  index: number;
  questions: Question[];
  isReviewMode: boolean;
  saveUserAswer: (content: string) => void;
  selectedAnswers: string[];
}
const QuizAnswers = React.memo(
  ({
    index,
    questions,
    isReviewMode,
    saveUserAswer,
    selectedAnswers,
  }: QuizAnswersProps) => {
    const setClassNamesAtTwoModes = (
      questionAns: Answer,
      userSelectedAns: string,
      isReviewMode: boolean
    ) => {
      let className: string = "";
      if (!isReviewMode) {
        if (questionAns.answer_content === userSelectedAns) {
          className = "quiz__answer selected-answer";
        } else {
          className = "quiz__answer bg-white";
        }
      } else {
        if (
          questionAns.answer_content === userSelectedAns &&
          !questionAns.correct
        ) {
          className = "quiz__answer-review wrong-answer";
        } else if (questionAns.correct) {
          className = "quiz__answer-review right-answer";
        } else {
          className = "quiz__answer-review bg-white";
        }
      }

      return className;
    };
    return (
      <div className="quiz__answers animation2">
        {questions[index].answers.map((answer, answerIndex) => {
          return (
            <p
              key={answer.answer_content}
              className={setClassNamesAtTwoModes(
                answer,
                selectedAnswers[index],
                isReviewMode
              )}
              onClick={() => saveUserAswer(answer.answer_content)}
            >
              {`${answerIndex + 1}) ${answer.answer_content}`}
            </p>
          );
        })}
      </div>
    );
  }
);

export default QuizAnswers;
