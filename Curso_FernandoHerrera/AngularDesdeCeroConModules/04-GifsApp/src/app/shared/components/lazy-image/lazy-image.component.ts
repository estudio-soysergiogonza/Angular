import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  standalone: false,
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {
  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public _loaded:boolean = false;

  ngOnInit(): void {
    if (!this.url) {
      throw new Error('url is required');
    }
  }

  onLoad() {
    this._loaded = true;
  }
}
