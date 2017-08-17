import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { HomePageModule } from './pages/home-page/home-page.module';
import { DetailsPageModule } from './pages/details-page/details-page.module';
import { InnerPageModule } from "./pages/inner-page/inner-page.module";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { AppService } from "./app.service";

import { routes } from "./app.routing";

import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from "./in-memory-data.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    DetailsPageModule,
    InnerPageModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    HttpModule,
    HomePageModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
