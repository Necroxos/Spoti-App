import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from "./components/inicio/inicio.component";
import { BuscadorComponent } from "./components/buscador/buscador.component";
import { ArtistaComponent } from './components/artista/artista.component';

const APP_ROUTES: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'buscador', component: BuscadorComponent },
    { path: 'artista/:id', component: ArtistaComponent },
    { path: '', pathMatch: 'full', component: InicioComponent },
    { path: '**', pathMatch: 'full', component: InicioComponent },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
