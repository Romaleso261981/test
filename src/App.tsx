import { Container, Flex } from "@mantine/core";
import Quiz from "./components/Quiz/Quiz";

import "./App.css";

const quizData = [
  {
    id: 1,
    question:
      'In CSS, which of these values CANNOT be used with the "position" property?',
    answers: [
      {
        id: 1,
        text: "static",
        isCorrect: false
      },
      {
        id: 2,
        text: "relative",
        isCorrect: false
      },
      {
        id: 3,
        text: "center",
        isCorrect: true
      },
      {
        id: 4,
        text: "absolute",
        isCorrect: false
      }
    ]
  },
  {
    id: 2,
    question: "How long is an IPv6 address?",
    answers: [
      {
        id: 1,
        text: "128 bits",
        isCorrect: true
      },
      {
        id: 2,
        text: "64 bits",
        isCorrect: false
      },
      {
        id: 3,
        text: "128 bytes",
        isCorrect: false
      },
      {
        id: 4,
        text: "32 bits",
        isCorrect: false
      }
    ]
  },
  {
    id: 3,
    question: "In the server hosting industry IaaS stands for...",
    answers: [
      {
        id: 1,
        text: "Infrastructure as a Service",
        isCorrect: true
      },
      {
        id: 2,
        text: "Internet and a Server",
        isCorrect: false
      },
      {
        id: 3,
        text: "Internet as a Service",
        isCorrect: false
      },
      {
        id: 4,
        text: "Infrastructure as a Server",
        isCorrect: false
      }
    ]
  }
];

const App2: React.FC = () => {
  return (
    <Flex className="wrapper">
      <Quiz quizData={quizData} />
    </Flex>
  );
};

export default App2;
