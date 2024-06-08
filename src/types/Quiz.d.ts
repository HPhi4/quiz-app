interface Answer {
  answer_content: string;
  correct: boolean;
}

interface Question {
  id: number;
  question_content: string;
  answers: Answer[];
}

export { Answer, Question };
