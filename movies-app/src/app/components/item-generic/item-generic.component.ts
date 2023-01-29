import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movies';
import { IMAGES_SIZES } from '../../constants/images-sizes';

@Component({
  selector: 'app-item-generic',
  templateUrl: './item-generic.component.html',
  styleUrls: ['./item-generic.component.scss']
})
export class ItemGenericComponent {
  imgSize = IMAGES_SIZES;
  @Input() movieData: Movie | null = null;
}
