import { Question } from "../types/quiz";
export const mockQuestions: Question[] = [
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
