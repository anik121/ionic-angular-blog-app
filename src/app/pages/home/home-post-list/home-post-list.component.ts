import { Component, OnInit } from '@angular/core';
import { OthersService } from '../../../services/others.service';
interface Post {
  id: number;
  title: string;
  content: string;
  create_at: number;
}

@Component({
  selector: 'app-home-post-list',
  templateUrl: './home-post-list.component.html',
  styleUrls: ['./home-post-list.component.scss'],
})
export class HomePostListComponent implements OnInit {
  isLoading = false;
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
  // readingTime() {
  //   const text = document.getElementById("article").innerText;
  //   const wpm = 225;
  //   const words = text.trim().split(/\s+/).length;
  //   const time = Math.ceil(words / wpm);
  //   document.getElementById("time").innerText = time;
  // }
}
