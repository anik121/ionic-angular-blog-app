import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NotificationListComponent } from '../notification-list/notification-list.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string = 'Undefined Title';
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

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
