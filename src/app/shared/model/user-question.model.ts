import { User } from '../../shared/model/user.model';
import { Show } from '../../shared/model/show.model';

export class UserQuestion {
    userQuestionId: string;
    description: string;
    show: Show;
    user: User;
}