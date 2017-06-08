import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MenuRoutingModule } from './home/menu/menu-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './home/menu/menu.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SmallDishesComponent } from './home/menu/small-dishes/small-dishes.component';
import { BrunchComponent } from './home/menu/brunch/brunch.component';
import { EntreesComponent } from './home/menu/entrees/entrees.component';
import { SidesComponent } from './home/menu/sides/sides.component';
import { SlideComponent } from './carousel/slide/slide.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InfoComponent } from './info/info.component';



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
    SlideComponent,
    NavbarComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MenuRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
