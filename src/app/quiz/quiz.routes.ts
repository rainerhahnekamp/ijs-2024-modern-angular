import {Routes} from "@angular/router";
import {QuizComponent} from "./quiz.component";
import {backendGuard} from "./backend.guard";
import {QuizService} from "./quiz.service";

const quizRoutes: Routes = [{
  providers: [QuizService],
  canMatch: [backendGuard],
  path: '',
  component: QuizComponent
}]

export default quizRoutes
