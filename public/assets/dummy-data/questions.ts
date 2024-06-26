export const QUESTIONS = [
  {
    id: 1,
    question_content: "React is mainly used for building ___.",
    answers: [
      {
        answer_content: "Database",
        correct: false,
      },
      {
        answer_content: "User interface",
        correct: true,
      },
      {
        answer_content: "Design Platform",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question_content: "The lifecycle methods are mainly used for ___.",
    answers: [
      {
        answer_content: "keeping track of event history",
        correct: false,
      },
      {
        answer_content: "enhancing components",
        correct: false,
      },
      {
        answer_content: "freeing up resources",
        correct: false,
      },
      {
        answer_content: "none of the above",
        correct: true,
      },
    ],
  },
  {
    id: 3,
    question_content:
      "___ can be done while multiple elements need to be returned from a component.",
    answers: [
      {
        answer_content: "Abstraction",
        correct: false,
      },
      {
        answer_content: "Insulation",
        correct: false,
      },
      {
        answer_content: "Wrapping",
        correct: true,
      },
    ],
  },
  {
    id: 4,
    question_content:
      "Which is the right way of accessing a function fetch() from an h1 element in JSX?",
    answers: [
      {
        answer_content: "<h1>{fetch()}</h1>",
        correct: true,
      },
      {
        answer_content: "<h1>${fetch()}</h1>",
        correct: false,
      },
      {
        answer_content: "<h1>{fetch}</h1>",
        correct: false,
      },
      {
        answer_content: "<h1>${fetch}</h1>",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question_content:
      "Which of the following methods in a React Component should be overridden to stop the component from updating?",
    answers: [
      {
        answer_content: "willComponentUpdate",
        correct: false,
      },
      {
        answer_content: "shouldComponentUpdate",
        correct: true,
      },
    ],
  },
];
