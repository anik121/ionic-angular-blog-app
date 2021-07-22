import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NotificationListComponent } from '../notification-list/notification-list.component';
import { OthersService } from 'src/app/services/others.service';
interface Post {
  id: number;
  title: string;
  content: string;
  create_at: number;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string = '';
  @Input() hasBackBtn: boolean = false;
  posts: Post[] = [];

  constructor(
    private modalController: ModalController,
    private _otherService: OthersService
  ) {}

  ngOnInit() {
    this._otherService.getPost().subscribe((post) => {
      this.posts = post;
    });
  }

  /**
   * @return (Open Modal)
   */
  async presentModal() {
    const modal = await this.modalController.create({
      component: NotificationListComponent,
      cssClass: 'my-notification-modal',
    });
    return modal.present();
  }

  onClick() {
    this.presentModal();
  }
}
