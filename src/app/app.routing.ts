import { Router, Route } from "@angular/router";

import { HomePageComponent } from './pages/home-page/home-page.component';
import { InnerPageComponent } from './pages/inner-page/inner-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';

export const routes: Route[] = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'inner', component: InnerPageComponent },
    { path: 'details/:id', component: DetailsPageComponent }
]