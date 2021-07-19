import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  showNewPosts: boolean = true;
  constructor() {}

  ngOnInit() {}

  segmentChanged(e) {
    if (e.detail.value === 'qns') {
      this.showNewPosts = false;
    } else {
      this.showNewPosts = true;
    }
  }
}
