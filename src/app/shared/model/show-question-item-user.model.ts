import { User } from '../../shared/model/user.model';
import { ShowQuestion } from './show-question.model';

export class ShowQuestionItemUser {
    showQuestionItemUserId: string;
    user: User;
    showQuestionItem: ShowQuestion;
}