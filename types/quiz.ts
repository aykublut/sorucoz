export type Question = {
  id: number;
  questionText: string;
  options: string[];
  correctAnswer: string;
};

export interface QuizState {
  questions: Question[];
  activeQuestionIndex: number;
  userAnswers: Record<number, string>; // { 1: "A", 2: "B" }
  isQuizFinished: boolean;
  isWrongAnswersMode: boolean;
  wrongQuestions: Question[];
  shuffleQuestions: () => void; // BUNA EKLENECEK
  // Aksiyonlar
  setQuestions: (questions: Question[]) => void;
  answerQuestion: (questionId: number, answer: string) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  finishQuiz: () => void;
  restartQuiz: () => void;
  retryWrongAnswers: () => void;
}
