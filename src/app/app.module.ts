import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './shared/shared.module';

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
    LatestProductsComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
