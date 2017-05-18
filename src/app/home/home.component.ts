import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public navIsFixed = false;

   constructor(@Inject(DOCUMENT) private document: Document) { }

   ngOnInit() { }

   @HostListener('window:scroll', [])
   onWindowScroll() {
     let number = this.document.body.scrollTop;
     if (number > 100) {
       this.navIsFixed = true;
     } else if (this.navIsFixed && number < 10) {
       this.navIsFixed = false;
     }
   }
 }
