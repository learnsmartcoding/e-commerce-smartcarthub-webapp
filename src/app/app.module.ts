import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogSectionComponent } from './components/blog-section/blog-section.component';
import { HumbergerComponent } from './components/humberger/humberger.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { CategoryComponent } from './components/category/category.component';
import { FeaturedSectionComponent } from './components/featured-section/featured-section.component';
import { BannerComponent } from './components/banner/banner.component';
import { LatestProductsComponent } from './components/latest-products/latest-products.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BlogSectionComponent,
    HumbergerComponent,
    HeaderComponent,
    HeroComponent,
    CategoryComponent,
    FeaturedSectionComponent,
    BannerComponent,
    LatestProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
