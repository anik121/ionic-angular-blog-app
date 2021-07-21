import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OthersService } from 'src/app/services/others.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Location } from '@angular/common';

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
  posts: Post[] = [];
  constructor(
    private router: ActivatedRoute,
    private _otherService: OthersService,
    private domSanitizer: DomSanitizer,
    private location: Location
  ) {}

  ngOnInit(): void {
    this._otherService.getPost().subscribe((post) => {
      let singleItem = post.filter(
        (singlePost) => singlePost.id === Number(this.router.snapshot.params.id)
      );
      this.posts = singleItem;
    });
  }

  goBack() {
    this.location.back();
  }
  getPostContent(content: any) {
    return this.domSanitizer.bypassSecurityTrustHtml(content);
  }
}
