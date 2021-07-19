import { Component, OnInit } from '@angular/core';
import { OthersService } from '../../../services/others.service';
interface Post {
  id: number;
  title: string;
  content: string;
  create_at: number;
}

@Component({
  selector: 'app-home-qns-list',
  templateUrl: './home-qns-list.component.html',
  styleUrls: ['./home-qns-list.component.scss'],
})
export class HomeQnsListComponent implements OnInit {
  posts: Post[] = [];
  constructor(private _otherService: OthersService) {}

  ngOnInit() {
    this._otherService.getPost().subscribe((post) => {
      this.posts = post;
    });
  }
  getPostTime(unix: number) {
    let d = new Date(unix);
    return d.toLocaleDateString();
  }
}
