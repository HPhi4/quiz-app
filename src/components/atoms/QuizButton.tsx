interface PropTypes {
  onClick: () => void;
  text: string;
  className?: string;
  disabled?: boolean;
}

const QuizButton = ({ text, onClick, className = "", disabled }: PropTypes) => {
  return (
    <button
      className={`button ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default QuizButton;
