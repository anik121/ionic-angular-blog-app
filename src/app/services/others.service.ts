import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { USER } from '../mock/user.mock';
interface User {
  id: number;
  name: string;
  avatar: string;
  mail: string;
  role: string;
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
}
