
import { Routes } from '@angular/router';
import { HomeRoutes } from './home/home.routing';
import { IndexRoutes } from './index/index.routing';


export const routes: Routes = [...HomeRoutes, ...IndexRoutes];