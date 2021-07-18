import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
interface Category {
  id: number;
  name: string;
}
@Component({
  selector: 'app-home-category',
  templateUrl: './home-category.component.html',
  styleUrls: ['./home-category.component.scss'],
})
export class HomeCategoryComponent implements OnInit {
  public items: Category[] = [
    {
      id: 1,
      name: 'Latest',
    },
    {
      id: 2,
      name: 'Design',
    },
    {
      id: 3,
      name: 'Travel',
    },
    {
      id: 4,
      name: 'Technology',
    },
    {
      id: 5,
      name: 'Money',
    },
    {
      id: 6,
      name: 'Knowledge',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
