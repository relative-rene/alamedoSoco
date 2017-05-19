import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { CarouselComponent } from './carousel/carousel.component';
import { SlideComponent } from './slide/slide.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public navIsFixed = false;
  // The time to show the next photo
  private NextPhotoInterval = 20000;
  // Looping or not
  private noLoopSlides = true;
  // Photos
  private slides: Array<any> = [];

  private addNewSlide() {
    this.slides.push(
      { image: './assets/baygritsEggs.jpg', text: 'BayGrits & Eggs' },
      { image: './assets/busArea.jpg', text: 'Deep Scuba Busser', },
      { image: './assets/spammasubi.jpg', text: 'Spammasubi' },
      { image: './assets/friedrolls.jpg', text: 'Fried Rolls' },
      { image: './assets/prowaffle.jpg', text: 'Waffle Art' },
      { image: './assets/gLatte.jpg', text: 'Green Latte' },
      { image: './assets/gritsEggs.jpg', text: 'Bay shrimp and grits' },
      { image: './assets/waffleChix.jpg', text: 'Chicken and Waffles' },
      { image: './assets/latteArt.jpg', text: 'Latte' }
    );
  }
  private removeLastSlide() {
    this.slides.pop();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let number = this.document.body.scrollTop;
    if (number > 100) {
      this.navIsFixed = true;
    } else if (this.navIsFixed && number < 10) {
      this.navIsFixed = false;
    }
  }

  constructor( @Inject(DOCUMENT) private document: Document) {
    this.addNewSlide();
  }
}
