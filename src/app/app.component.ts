import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // The time to show the next photo
  private NextPhotoInterval = 5000;
  // Looping or not
  private noLoopSlides = true;
  // Photos
  private slides: Array<any> = [];

  constructor() {
    this.addNewSlide();
  }

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



  //   new Image('BayGrits & Eggs', 'BayGrits & Eggs', './assets/baygritsEggs.jpg'),
  //   new Image('Busser Area', 'Deep Scuba Busser', './assets/busArea.jpg'),
  //   new Image('Spammasubi', 'Wrapped Spam', './assets/spammasubi.jpg'),
  //   new Image('Fried Rolls', 'Deepfried rolls w/ dipping sauce', './assets/friedrolls.jpg'),
  //   new Image('Waffle Art', 'Upclose Waffle', './assets/prowaffle.jpg'),
  //   new Image('Green Latte', 'Caffeine Leaf Art', './assets/gLatte.jpg'),
  //   new Image('Grits & Eggs', 'Bay shrimp and grits', './assets/gritsEggs.jpg'),
  //   new Image('Chicken and Waffles', 'Chix and Waffles', './assets/waffleChix.jpg'),
  //   new Image('Latte', 'Latte Art', './assets/latteArt.jpg')
}
