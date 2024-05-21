export type AnswerStatus = 'unanswered' | 'correct' | 'incorrect';

export type QuizBackend = {
  id: number;
  holidayId: number;
  title: string;
  timeInSeconds: number;
  questions: Array<{
    id: number;
    question: string;
    explanation: string;
    answers: Array<{ id: number; answer: string; isCorrect: boolean }>;
  }>;
};

export type Question = {
  id: number;
  holidayId: number;
  question: string;
  answer: number;
  choices: { id: number; text: string }[];
  explanation: string;
  status: AnswerStatus;
};

export type Quiz = {
  title: string;
  questions: Question[];
  timeInSeconds: number;
};

export function toQuiz(quizBackend: QuizBackend): Quiz {
  return {
    title: quizBackend.title,
    questions: quizBackend.questions.map((q) => ({
      id: q.id,
      holidayId: quizBackend.holidayId,
      question: q.question,
      answer: q.answers.find((a) => a.isCorrect)!.id,
      choices: q.answers.map((a) => ({ id: a.id, text: a.answer })),
      explanation: q.explanation,
      status: 'unanswered',
    })),
    timeInSeconds: quizBackend.timeInSeconds,
  };
}

