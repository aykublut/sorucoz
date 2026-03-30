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
      // Eğer yanlış modundaysak sadece yanlış soruları, değilse tüm soruları değerlendir
      const currentList = state.isWrongAnswersMode
        ? state.wrongQuestions
        : state.questions;

      // O an çözülen listedeki yanlışları bul
      const newWrongQs = currentList.filter(
        (q) => state.userAnswers[q.id] !== q.correctAnswer,
      );

      return { isQuizFinished: true, wrongQuestions: newWrongQs };
    }),
  // === YENİ: SORULARI KARIŞTIRMA FONKSİYONU ===
  shuffleQuestions: () =>
    set((state) => {
      const shuffled = [...state.questions];
      // Fisher-Yates Karıştırma Algoritması
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return {
        questions: shuffled,
        activeQuestionIndex: 0, // 1. soruya dön
        userAnswers: {}, // Verilen cevapları sıfırla
      };
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
