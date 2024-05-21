import {Component, input, output} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {Question} from "./model";

@Component({
  selector: 'app-question',
  template: `
    <mat-card>
      <mat-card-header>
        <div role="heading">{{ question().question }}</div>
      </mat-card-header>
      <mat-card-content>
        <div>
          @for (choice of question().choices; track choice) {
            <button
              mat-raised-button
              (click)="answer.emit(choice.id)"
                      
            >
              {{ choice.text }}
            </button>
          }
        </div>

        @if (question().status !== 'unanswered') {
          <div>
            <p>{{ question().status }}</p>
            <p>{{ question().explanation }}</p>
          </div>
        }
      </mat-card-content>
    </mat-card>`,
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardContent,
    MatCardHeader
  ]
})
export class QuizQuestionComponent {
  question = input.required<Question>()

  answer = output<number>()
}
