import React, { useEffect, useState } from "react";

interface CountdownTimerProps {
  className?: string;
  onTimeUp: () => void;
  isReviewMode?: boolean;
}
const CountdownTimer = React.memo(
  ({ className, onTimeUp, isReviewMode }: CountdownTimerProps) => {
    const [timeLeft, setTimeLeft] = useState<number>(90);

    useEffect(() => {
      if (timeLeft === 0) {
        onTimeUp();
        return;
      }

      if (isReviewMode) {
        return;
      }
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }, [isReviewMode, onTimeUp, timeLeft]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const percentage = (timeLeft / 90) * 100;

    const radius = 55;
    const stroke = 9;
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        className={className}
      >
        <svg height={radius * 2} width={radius * 2}>
          <defs>
            <filter id="shadow">
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="3"
                floodColor="#ccc"
                floodOpacity="0.5"
              />
            </filter>
          </defs>
          <circle
            stroke="#fff"
            fill="#fff"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            style={{ filter: "url(#shadow)" }}
          />
          <circle
            stroke={isReviewMode ? "red" : "#312e81"}
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={`${circumference} ${circumference}`}
            style={{
              strokeDashoffset,
              transition: "stroke-dashoffset 1s linear",
              transform: "rotate(-90deg)",
              transformOrigin: "50% 50%",
              filter: "url(#shadow)",
            }}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="18px"
            fontWeight={"bold"}
            fill={timeLeft <= 10 || isReviewMode ? "red" : "#312e81"}
          >
            {timeLeft === 0 || isReviewMode
              ? "End"
              : `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
          </text>
        </svg>
      </div>
    );
  }
);

export default CountdownTimer;
