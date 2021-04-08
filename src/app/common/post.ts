import { User } from './user';
import { Comment } from './comment';

export class Post {
    id!: number;
    image!: string;
    text!: string;
    like!: number;
    user!: User;
    comment!: Comment[];

}
