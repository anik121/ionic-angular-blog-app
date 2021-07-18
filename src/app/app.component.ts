import { Component, OnInit } from '@angular/core';
import { configFromSession } from '@ionic/core';
import { OthersService } from './services/others.service';
interface User {
  id: number;
  name: string;
  avatar: string;
  mail: string;
  role: string;
}
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home', match: true },
    { title: 'Search', url: '/search', icon: 'search-circle' },
    { title: 'Bookmark', url: '/bookmark', icon: 'bookmarks' },
    { title: 'Profile', url: '/user', icon: 'person' },
    { title: 'Setting', url: '/setting', icon: 'settings' },
    { title: 'About', url: '/about', icon: 'information-circle' },
  ];

  users: User[] = [];

  constructor(private _otherService: OthersService) {}
  ngOnInit() {
    this._otherService.getUsers().subscribe((user) => {
      this.users = user;
    });
  }
}
