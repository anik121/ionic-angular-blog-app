import { Component, OnInit } from '@angular/core';
import { OthersService } from '../../../services/others.service';
import { PostService } from '../../../services/post.service';
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
  posts: Post[] = [];
  constructor(
    private _otherService: OthersService,
    private _postService: PostService
  ) {}

  ngOnInit() {
    // this._otherService.getPost().subscribe((post) => {
    //   this.posts = post;
    // });
    this._postService.postData().subscribe((data) => {
      this.posts = data;
    });
  }

  getPostTime(unix: number) {
    let d = new Date(unix);
    return d.toLocaleDateString();
  }
  randomDigit() {
    let code = '';
    let colorCode = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    for (let i = 0; i < 6; i++) {
      code += randomCode(colorCode);
    }
    function randomCode(code: Array<number>) {
      return Math.floor(Math.random() * code.length);
    }
    return code;
  }

  readingTime(txt: string) {
    const text = txt;
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    return time;
  }
}
