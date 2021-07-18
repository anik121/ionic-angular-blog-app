import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { USER } from '../mock/user.mock';
import { POSTS } from '../mock/post.mock';
interface User {
  id: number;
  name: string;
  avatar: string;
  mail: string;
  role: string;
}
interface Post {
  id: number;
  title: string;
  content: string;
  create_at: number;
}
@Injectable({
  providedIn: 'root',
})
export class OthersService {
  constructor() {}

  getUsers(): Observable<User[]> {
    const user = of(USER);
    return user;
  }
  getPost(): Observable<Post[]> {
    const post = of(POSTS);
    return post;
  }
}
