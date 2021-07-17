import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/', icon: 'home', match: true },
    { title: 'Search', url: '/search', icon: 'search-circle' },
    { title: 'Bookmark', url: '/bookmark', icon: 'bookmarks' },
    { title: 'Profile', url: '/user', icon: 'person' },
    { title: 'Setting', url: '/setting', icon: 'settings' },
    { title: 'About', url: '/about', icon: 'information-circle' },
  ];

  constructor() {}
}
