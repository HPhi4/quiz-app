import React from "react";
import { Question } from "../../types/Quiz";

interface QuizQuestionProps {
  index: number;
  questions: Question[];
}

const QuizQuestion = React.memo(({ index, questions }: QuizQuestionProps) => {
  return (
    <div className="animation2">
      <p className="quiz__question-id">
        Question <span className="fw-bold-700">{questions[index].id}</span>/
        {questions.length}
      </p>
      <h3 className="quiz__question-title">
        {questions[index].question_content}
      </h3>
    </div>
  );
});

export default QuizQuestion;
