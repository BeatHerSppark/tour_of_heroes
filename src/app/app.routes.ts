import { Routes } from "@angular/router";
import { Heroes } from "./heroes/heroes";
import { HeroDetail } from "./hero-detail/hero-detail";
import { NotFound } from "./not-found/not-found";
import { Dashboard } from "./dashboard/dashboard";

export const routes: Routes = [
    {
        path: 'heroes',
        component: Heroes
    },
    {
        path: 'dashboard',
        component: Dashboard
    },
    {
        path: 'hero-detail/:id',
        component: HeroDetail
    },
    {
        path: '',
        redirectTo: 'heroes',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotFound
    }
];
