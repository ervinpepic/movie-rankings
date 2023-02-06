import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movies';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { IMAGES_SIZES } from '../../constants/images-sizes';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [trigger('slideFade', [state('void', style({ opacity: 0 })), transition('void <=> *', [animate('1s')])])]
})
export class SliderComponent implements OnInit {
  imgSize = IMAGES_SIZES;

  @Input() moviesItemsInput: Movie[] = [];
  @Input() isBanner: boolean = false

  currentSlideIndex: number = 0;

  ngOnInit(): void {
    if (!this.isBanner) {
    setInterval(() => {
      this.currentSlideIndex = ++this.currentSlideIndex % this.moviesItemsInput.length;
    }, 5000);
  }
}
}
