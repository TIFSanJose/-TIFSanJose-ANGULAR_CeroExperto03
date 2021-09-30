import { RouterModule, Routes } from "@angular/router";
import { AboutComponent }       from "./components/about/about.component";
import { HeroeComponent }       from "./components/heroe/heroe.component";
import { HeroesComponent }      from "./components/heroes/heroes.component";
import { HomeComponent }        from "./components/home/home.component";
import { ViewHeroeComponent }   from "./components/view-heroe/view-heroe.component";


const APP_ROUTE: Routes = [
    {path: 'home',                  component: HomeComponent },
    {path: 'about',                 component: AboutComponent },
    {path: 'heroes',                component: HeroesComponent },
    {path: 'heroe/:id',             component: HeroeComponent },
    {path: 'verheroe/:termino',     component: ViewHeroeComponent },

    {path: '**', pathMatch: 'full', redirectTo: 'home'}

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTE);