import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinglePostPageRoutingModule } from './single-post-routing.module';

import { SinglePostPage } from './single-post.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinglePostPageRoutingModule,
  ],
  declarations: [SinglePostPage, HeaderComponent, FooterComponent],
})
export class SinglePostPageModule {}
