import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './home/menu/menu.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { SmallDishesComponent } from './home/menu/small-dishes/small-dishes.component';
import { BrunchComponent } from './home/menu/brunch/brunch.component';
import { EntreesComponent } from './home/menu/entrees/entrees.component';
import { SidesComponent } from './home/menu/sides/sides.component';
import { SlideComponent } from './home/slide/slide.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    CarouselComponent,
    SmallDishesComponent,
    BrunchComponent,
    EntreesComponent,
    SidesComponent,
    SlideComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
