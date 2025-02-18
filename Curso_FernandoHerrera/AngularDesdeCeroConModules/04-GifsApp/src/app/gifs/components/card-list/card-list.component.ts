import { Component, Input } from '@angular/core';
import type { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  standalone: false,
  templateUrl: './card-list.component.html',
})
export class CardListComponent {
  @Input()
  public gifs: Gif[] = [];
}
