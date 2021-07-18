import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OthersService } from 'src/app/services/others.service';
interface Post {
  id: number;
  title: string;
  content: string;
  create_at: number;
}
@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss'],
})
export class NotificationListComponent implements OnInit {
  isLoading: boolean = false;
  posts: Post[] = [];
  constructor(
    private modalController: ModalController,
    private _otherService: OthersService
  ) {}

  ngOnInit() {
    this._otherService.getPost().subscribe((post) => {
      this.posts = post;
    });

    setTimeout(() => {
      if (this.posts.length > 0) {
        this.isLoading = true;
      }
    }, 2000);
  }

  /**
   * @return (Close Modal)
   */
  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
  onCloseModal() {
    this.dismiss();
  }
}
