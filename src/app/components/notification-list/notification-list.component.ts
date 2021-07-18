import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss'],
})
export class NotificationListComponent implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}
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
