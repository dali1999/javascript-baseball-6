import { Console } from "@woowacourse/mission-utils";

// 같은 수가 같은 자리에 있으면 '스트라이크'
function countStrike(computerAnswer, userAnswer) {
  let strike = 0;
  for (let i = 0; i < 3; i++) {
    if (computerAnswer[i] === userAnswer[i]) {
      strike++;
    }
  }
  return strike;
}
// 같은 수가 다른 자리에 있으면 '볼'
function countBall(computerAnswer, userAnswer) {
  let ball = 0;
  computerAnswer.split("").forEach((num) => {
    if (userAnswer.includes(num)) ball++;
  });
  return ball;
}

export default function printHint(computerAnswer, userAnswer) {
  const strike = countStrike(computerAnswer, userAnswer);
  const ball = countBall(computerAnswer, userAnswer) - strike;

  if (strike + ball === 0) {
    Console.print(`낫싱`);
  } else if (strike === 0) {
    Console.print(`${ball}볼`);
  } else if (ball === 0) {
    Console.print(`${strike}스트라이크`);
  } else {
    Console.print(`${ball}볼 ${strike}스트라이크`);
  }
}
