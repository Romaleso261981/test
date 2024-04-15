import { FC, useState } from "react";

import { Button, Flex, Group, Title } from "@mantine/core";

import s from "./Quiz.module.css";

type Answer = {
  id: number;
  text: string;
  isCorrect: boolean;
};

type Question = {
  id: number;
  question: string;
  answers: Answer[];
};

type Props = {
  quizData: Question[];
};

const Quiz: FC<Props> = ({ quizData }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(false);

  const handleAnswer = (isCorrect: boolean, answerId: number) => {
    setSelectedAnswer(answerId);
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setTotal(true);
      // alert(`Quiz completed! Your score: ${score}/${quizData.length}`);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null);
    }
  };

  return (
    <Flex className={s.wrapper}>
      <Title>{quizData[currentQuestion].question}</Title>
      <Flex className={s.answerWrapper}>
        {quizData[currentQuestion].answers.map((answer) => {
          return (
            <Button
              key={answer.id}
              style={{
                background: selectedAnswer === answer.id ? "white" : "inherit",
                backgroundColor:
                  selectedAnswer === answer.id
                    ? answer.isCorrect
                      ? "green"
                      : "red"
                    : "blue"
              }}
              className={s.btn}
              onClick={() => handleAnswer(answer.isCorrect, answer.id)}
            >
              {answer.text}
            </Button>
          );
        })}
      </Flex>
      <Flex className={s.btnWrapper}>
        <Group className={s.btWrapper}>
          {currentQuestion > 0 && (
            <Button className={s.bt} onClick={handlePrev} mt={20}>
              Prev
            </Button>
          )}
          <Button className={s.bt} onClick={handleNext} mt={20}>
            Next
          </Button>
        </Group>
      </Flex>
      {total && (
        <Flex>
          <Title>{`Ви відповіли на ${score} з ${quizData.length} вірно!!!`}</Title>
        </Flex>
      )}
    </Flex>
  );
};

export default Quiz;
