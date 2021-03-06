import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';
// Custom Component
import { HomePage } from './home.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { SliderComponent } from './slider/slider.component';
import { BookmarkIconComponent } from 'src/app/components/bookmark-icon/bookmark-icon.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { NotificationListComponent } from 'src/app/components/notification-list/notification-list.component';
import { HomePostListComponent } from './home-post-list/home-post-list.component';
import { HomeQnsListComponent } from './home-qns-list/home-qns-list.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [
    HomePage,
    HeaderComponent,
    SliderComponent,
    BookmarkIconComponent,
    FooterComponent,
    NotificationListComponent,
    HomePostListComponent,
    HomeQnsListComponent,
  ],
})
export class HomePageModule {}
