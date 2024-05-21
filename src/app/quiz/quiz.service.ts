import {Quiz, QuizBackend, toQuiz} from './model';
import {computed, inject, Injectable, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class QuizService {
  httpClient = inject(HttpClient)
  quiz = signal<Quiz | undefined>(undefined)

  async loadQuiz() {
    this.httpClient.get<QuizBackend>('http://localhost:8080/holiday/6/quiz').subscribe(response => {
      this.quiz.set(toQuiz(response))
    })
  }

  status = computed(() => {
    const questions = this.quiz()?.questions;

    if (!questions) {
      return ''
    }
    const answered = questions.filter(question => question.status !== 'unanswered').length;

    return `Status: ${answered}/${questions.length}`
  })

  answer(questionId: number, choiceId: number) {
    const quiz = this.quiz()
    assertDefined(quiz);

    this.quiz.update(quiz => {
      if (quiz === undefined) {
        return quiz;
      }

      return {
        ...quiz,
        questions: quiz.questions.map(question => {
          if (question.id === questionId) {
            return {...question, status: choiceId === question.answer ? 'correct' : 'incorrect'}
          } else {
            return question;
          }
        })
      }
    })
  }
}

function assertDefined<T>(object: T): asserts object is NonNullable<T> {
  if (object === undefined || object === null) {
    throw new Error(`${String(object)}
    cannot
    be
    null`);
  }
}


