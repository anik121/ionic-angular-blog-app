import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SearchPageRoutingModule],
  declarations: [SearchPage, HeaderComponent, FooterComponent],
})
export class SearchPageModule {}
