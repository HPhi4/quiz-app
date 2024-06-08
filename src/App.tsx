import { useState } from "react";
import QuizContent from "./components/organisms/QuizContent";
import QuizButton from "./components/atoms/QuizButton";

function App() {
  const [isStartQuiz, setIsStartQuiz] = useState<boolean>(false);

  return (
    <>
      <div className="quiz-app">
        {isStartQuiz ? (
          <>
            <QuizContent />
          </>
        ) : (
          <div className="animation">
            <h1 className="quiz-app__start-heading pt-50">
              Welcome to React Quiz Game!
            </h1>
            <QuizButton
              text="Start"
              className="start-btn m-auto"
              onClick={() => setIsStartQuiz(true)}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
