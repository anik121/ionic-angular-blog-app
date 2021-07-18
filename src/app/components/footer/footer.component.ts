import { Component, OnInit } from '@angular/core';
interface Nav {
  id: number;
  label: string;
  path: string;
  icon: string;
}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public navMenu: Nav[] = [
    {
      id: 1,
      label: 'Home',
      path: '/home',
      icon: 'home',
    },
    {
      id: 1,
      label: 'Bookmark',
      path: '/bookmark',
      icon: 'bookmark',
    },
    {
      id: 1,
      label: 'Profile',
      path: '/user',
      icon: 'person',
    },
    {
      id: 1,
      label: 'Setting',
      path: '/setting',
      icon: 'settings',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
