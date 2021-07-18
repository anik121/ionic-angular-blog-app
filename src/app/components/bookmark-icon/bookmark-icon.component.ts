import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-bookmark-icon',
  templateUrl: './bookmark-icon.component.html',
  styleUrls: ['./bookmark-icon.component.scss'],
})
export class BookmarkIconComponent implements OnInit {
  @Input() Id: number = 1;
  isBookmark: boolean = false;
  constructor(public toastController: ToastController) {}

  ngOnInit() {}

  /**
   * @return (Toaster Message)
   */
  async bookmarkToast() {
    const toast = await this.toastController.create({
      message: 'আপনি এই পোস্টটি আপনার পছন্দের তালিকায় যোগ করেছেন।',
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }
  async unBookmarkToast() {
    const toast = await this.toastController.create({
      message: 'আপনি এই পোস্টটি আপনার পছন্দের তালিকা থেকে মুছে দিয়েছেন।',
      duration: 2000,
      color: 'danger',
    });
    toast.present();
  }

  async prestToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Toaster Header',
      message: 'Click to close',
      position: 'bottom',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          },
        },
        {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await toast.present();
    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  onBookmarkSliderPost() {
    this.isBookmark = !this.isBookmark;
    if (this.isBookmark) {
      this.bookmarkToast();
    } else {
      this.unBookmarkToast();
    }
  }
}
