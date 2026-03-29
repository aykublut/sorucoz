import { create } from "zustand";
import { QuizState, Question } from "../types/quiz";

export const useQuizStore = create<QuizState>((set, get) => ({
  questions: [],
  activeQuestionIndex: 0,
  userAnswers: {},
  isQuizFinished: false,
  isWrongAnswersMode: false,
  wrongQuestions: [],

  setQuestions: (questions: Question[]) => set({ questions }),

  answerQuestion: (questionId: number, answer: string) =>
    set((state) => ({
      userAnswers: { ...state.userAnswers, [questionId]: answer },
    })),

  nextQuestion: () =>
    set((state) => {
      const currentList = state.isWrongAnswersMode
        ? state.wrongQuestions
        : state.questions;
      if (state.activeQuestionIndex < currentList.length - 1) {
        return { activeQuestionIndex: state.activeQuestionIndex + 1 };
      }
      return {};
    }),

  prevQuestion: () =>
    set((state) => {
      if (state.activeQuestionIndex > 0) {
        return { activeQuestionIndex: state.activeQuestionIndex - 1 };
      }
      return {};
    }),

  finishQuiz: () =>
    set((state) => {
      const wrongQs = state.questions.filter(
        (q) => state.userAnswers[q.id] !== q.correctAnswer,
      );
      return { isQuizFinished: true, wrongQuestions: wrongQs };
    }),

  restartQuiz: () =>
    set({
      activeQuestionIndex: 0,
      userAnswers: {},
      isQuizFinished: false,
      isWrongAnswersMode: false,
      wrongQuestions: [],
    }),

  retryWrongAnswers: () =>
    set({
      activeQuestionIndex: 0,
      userAnswers: {}, // Yeniden çözerken eski cevapları sıfırlıyoruz
      isQuizFinished: false,
      isWrongAnswersMode: true,
    }),
}));
