import {CommonModule, NgOptimizedImage} from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomePageComponent, SearchBoxComponent, CardListComponent, GifsCardComponent],
    imports: [CommonModule, SharedModule, NgOptimizedImage],
  exports: [HomePageComponent],
})
export class GifsModule {}
