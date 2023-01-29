import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movies';

@Component({
  selector: 'app-items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.scss']
})
export class ItemsBannerComponent {
  @Input() moviesItemsInput: Movie[] = [];
  @Input() title: string = '';
}
