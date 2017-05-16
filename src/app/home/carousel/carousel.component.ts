import { Component, OnInit } from '@angular/core';
import { Image } from 'app/_interfaces/images.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
images: Image[] = [
  new Image('BayGrits & Eggs', 'BayGrits & Eggs', './assets/baygritsEggs.jpg'),
  new Image('Busser Area', 'Deep Scuba Busser', './assets/assetsbusArea'),
  new Image('Spammasubi', 'Wrapped Spam', './assets/spammasubi.jpg'),
  new Image('Fried Rolls', 'Deepfried rolls w/ dipping sauce', './assets/friedrolls.jpg'),
  new Image('Waffle Art', 'Upclose Waffle', './assets/prowaffle.jpg'),
  new Image('Green Latte', 'Caffeine Leaf Art', './assets/gLatte.jpg'),
  new Image('Grits & Eggs', 'Bay shrimp and grits', './assets/gritsEggs.jpg'),
  new Image('Chicken and Waffles', 'Chix and Waffles', './assets/waffleChix.jpg'),
  new Image('Latte', 'Latte Art', './assets/latteArt.jpg')
];
  constructor() { }

  ngOnInit() {
  }

}
