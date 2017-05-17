import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './home/menu/menu.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { SmallDishesComponent } from './small-dishes/small-dishes.component';
import { BrunchComponent } from './brunch/brunch.component';
import { EntreesComponent } from './entrees/entrees.component';
import { SidesComponent } from './sides/sides.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    CarouselComponent,
    SmallDishesComponent,
    BrunchComponent,
    EntreesComponent,
    SidesComponent
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
