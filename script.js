const first = document.querySelector('.first');
const score = document.querySelector('.score');
const question = document.querySelector('.question');
const a = document.querySelector('.a');
const b = document.querySelector('.b');
const c = document.querySelector('.c');
const d = document.querySelector('.d');
const choices = document.querySelectorAll('.choice');
const secondContainer = document.querySelector('.second-container');
const firstContainer = document.querySelector('.first-container');
const result = document.querySelector('.result');
const questionQ = document.querySelector('.question-p');
const meter = document.querySelector('.meter');
const aAnswer = [2, '최시원', 'Red', '밥먹었어?'];
const bAnswer = [1, '류시원', 'Black', 'Adiós'];
const cAnswer = [20, '황시원', 'Sky Blue', 'Здравствуйте.'];
const dAnswer = [12, '고시원', 'Green', 'お休み'];
const lastScore = document.querySelector('.last_score');
const q = [
  'What is 1 + 1 ?',
  'Guess my name',
  'What is my favorite color ?',
  'Say "Hello" !',
];

let score_num = 0;
let count = 0;
if (count == 0) {
  choices[0].setAttribute('id', 'correct');
}
score.innerHTML = score_num;
a.innerHTML = aAnswer[count];
b.innerHTML = bAnswer[count];
c.innerHTML = cAnswer[count];
d.innerHTML = dAnswer[count];
question.innerHTML = q[count];
questionQ.innerHTML = `Question ${count + 1}/4`;
meter.setAttribute('value', '25');
// updatePage 함수: 페이지에 있는 문제를 바꿀때 사용된다.
function updatePage() {
  count++;
  question.innerHTML = q[count];
  a.innerHTML = aAnswer[count];
  b.innerHTML = bAnswer[count];
  c.innerHTML = cAnswer[count];
  d.innerHTML = dAnswer[count];
  meter.setAttribute('value', `${25 * (count + 1)}`);
  questionQ.innerHTML = `Question ${count + 1}/4`;
  if (count == 1) {
    choices[0].setAttribute('id', 'wrong');
    choices[1].setAttribute('id', 'wrong');
    choices[2].setAttribute('id', 'correct');
    choices[3].setAttribute('id', 'correct');
  } else if (count == 2) {
    choices[0].setAttribute('id', 'wrong');
    choices[1].setAttribute('id', 'wrong');
    choices[2].setAttribute('id', 'wrong');
    choices[3].setAttribute('id', 'correct');
  } else if (count == 3) {
    choices[0].setAttribute('id', 'wrong');
    choices[1].setAttribute('id', 'wrong');
    choices[2].setAttribute('id', 'correct');
    choices[4].setAttribute('id', 'wrong');
  }
  if (count === 4) {
    firstContainer.style.display = 'none';
    secondContainer.style.display = 'none';
    result.style.display = 'inline-block';
    lastScore.innerHTML = score_num;
  }
}
// checkAnswer 함수: 사용자의 정답 유무를 확인할때 사용된다. checkAnswer의 마지막에는 updatePage함수가 돌아간다.
function checkAnswer(clicked_id) {
  if (clicked_id === 'correct') {
    alert('정답입니다.');
    updatePage();
    score_num++;
    score.innerHTML = score_num;
  } else {
    alert('틀렸습니다.');
    updatePage();
  }
}
// 1. 메인페이지에서 Play 버튼 누름
// 2. quiz.html 페이지로 이동되면서, script 태그에 onload를 통해 updatePage() 함수가 돌아감
// 3. 첫 퀴즈가 나옴
// 4. 4개의 선택지 중 하나를 고르면 checkAnswer() 함수가 돌아감
// 5. 정답인지 오답인지 체크하고, 정답이면 Score가 오르고, 오답이면 바뀌지 않는다
// 6. 1초 후 updatePage() 함수가 돌아간다
// 7. 마지막에는 몇점을 맞았는지 보여주는 페이지가 나온다.
