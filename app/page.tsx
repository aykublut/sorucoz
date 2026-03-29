"use client";

import { useEffect } from "react";
import { useQuizStore } from "../store/useQuizStore";
import { Question } from "../types/quiz";

// Örnek Veri (Kendi 100 sorunu buraya bağlayacaksın)
const mockQuestions: Question[] = [
  {
    id: 1,
    questionText: "Next.js hangi kütüphane üzerine kuruludur?",
    options: ["Vue", "React", "Angular", "Svelte"],
    correctAnswer: "React",
  },
  {
    id: 2,
    questionText: "TypeScript'in JavaScript'ten en büyük farkı nedir?",
    options: [
      "Daha hızlı çalışması",
      "Sadece backend'de kullanılması",
      "Statik tip kontrolü sağlaması",
      "Veritabanı olması",
    ],
    correctAnswer: "Statik tip kontrolü sağlaması",
  },
  {
    id: 3,
    questionText: "Zustand ne işe yarar?",
    options: [
      "State yönetimi",
      "API isteği atma",
      "Veritabanı oluşturma",
      "CSS yazma",
    ],
    correctAnswer: "State yönetimi",
  },
];

export default function QuizApp() {
  const {
    questions,
    activeQuestionIndex,
    userAnswers,
    isQuizFinished,
    isWrongAnswersMode,
    wrongQuestions,
    setQuestions,
    answerQuestion,
    nextQuestion,
    prevQuestion,
    finishQuiz,
    restartQuiz,
    retryWrongAnswers,
  } = useQuizStore();

  // Component yüklendiğinde soruları store'a atıyoruz
  useEffect(() => {
    setQuestions(mockQuestions);
  }, [setQuestions]);

  if (questions.length === 0)
    return <div className="p-10 text-center">Yükleniyor...</div>;

  // Hangi soru listesini kullanacağımızı belirliyoruz (Tümü veya Sadece Yanlışlar)
  const currentQuestionsList = isWrongAnswersMode ? wrongQuestions : questions;
  const currentQuestion = currentQuestionsList[activeQuestionIndex];
  const isLastQuestion =
    activeQuestionIndex === currentQuestionsList.length - 1;

  // SONUÇ EKRANI
  if (isQuizFinished) {
    const correctCount = questions.length - wrongQuestions.length;
    return (
      <div className="max-w-2xl mx-auto mt-20 p-8 bg-white shadow-lg rounded-xl text-center">
        <h1 className="text-3xl font-bold mb-4">Test Bitti!</h1>
        <p className="text-xl mb-6">
          Skorun: {correctCount} Doğru, {wrongQuestions.length} Yanlış
        </p>

        <div className="space-x-4">
          <button
            onClick={restartQuiz}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Baştan Başla
          </button>

          {wrongQuestions.length > 0 && (
            <button
              onClick={retryWrongAnswers}
              className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Sadece Yanlışları Tekrar Çöz
            </button>
          )}
        </div>
      </div>
    );
  }

  // TEST EKRANI
  return (
    <div className="max-w-3xl mx-auto mt-20 p-8 bg-white shadow-xl rounded-2xl">
      <div className="mb-8 flex justify-between items-center text-gray-500 font-medium">
        <span>
          {isWrongAnswersMode ? "Yanlışları Çözme Modu" : "Normal Mod"}
        </span>
        <span>
          Soru: {activeQuestionIndex + 1} / {currentQuestionsList.length}
        </span>
      </div>

      <h2 className="text-2xl font-bold mb-6">
        {currentQuestion?.questionText}
      </h2>

      <div className="space-y-3 mb-8">
        {currentQuestion?.options.map((option, index) => {
          const isSelected = userAnswers[currentQuestion.id] === option;
          return (
            <button
              key={index}
              onClick={() => answerQuestion(currentQuestion.id, option)}
              className={`w-full text-left p-4 rounded-xl border-2 transition ${
                isSelected
                  ? "border-blue-600 bg-blue-50 text-blue-700 font-semibold"
                  : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={prevQuestion}
          disabled={activeQuestionIndex === 0}
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50 hover:bg-gray-300 transition"
        >
          Önceki
        </button>

        {isLastQuestion ? (
          <button
            onClick={finishQuiz}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Testi Bitir
          </button>
        ) : (
          <button
            onClick={nextQuestion}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Sonraki
          </button>
        )}
      </div>
    </div>
  );
}
