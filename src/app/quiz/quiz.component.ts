import {Component, effect, inject} from '@angular/core';
import {Quiz} from "./model";
import {QuizService} from "./quiz.service";
import {MatCard, MatCardModule} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {QuizQuestionComponent} from "./quiz-question.component";

@Component({
  selector: 'app-quiz',
  template: `
    <h1>{{ quizService.quiz()?.title }}</h1>
    <h2>{{ quizService.status() }}</h2>
    @for (question of quizService.quiz()?.questions; track question) {
      <app-question [question]="question" (answer)="quizService.answer(question.id, $event)"/>
    }`,
  standalone: true,
  imports: [
    MatCardModule,
    MatButton,
    QuizQuestionComponent
  ]
})
export class QuizComponent {
  quizService = inject(QuizService)
  statusEffect = effect(() => console.log(this.quizService.status()))

  constructor() {
    this.quizService.loadQuiz()
  }

}
