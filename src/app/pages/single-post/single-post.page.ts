import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OthersService } from 'src/app/services/others.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { PostService } from 'src/app/services/post.service';

interface Post {
  id: number;
  title: string;
  content: string;
  create_at: number;
}
@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.page.html',
  styleUrls: ['./single-post.page.scss'],
})
export class SinglePostPage implements OnInit {
  posts: Array<any> = [];
  isLoading: boolean = true;
  constructor(
    private router: ActivatedRoute,
    private _otherService: OthersService,
    private domSanitizer: DomSanitizer,
    private location: Location,
    private _postService: PostService
  ) {}

  ngOnInit(): void {
    this._postService
      .postSingleData(this.router.snapshot.params.id)
      .subscribe((post) => {
        this.posts = post;
      });
    if (this.posts) {
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    }
  }

  goBack() {
    this.location.back();
  }
  getPostContent(content: any) {
    return this.domSanitizer.bypassSecurityTrustHtml(content);
  }
}
