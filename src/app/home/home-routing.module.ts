import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LecturasComponent } from './lecturas/lecturas.component';
import { MultimediaComponent } from './multimedia/multimedia.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { AutoresComponent } from './autores/autores.component';

const routes: Routes = [  
  { path: '', component: HomeComponent },
  { path: 'lecturas', component: LecturasComponent },
  { path: 'multimedia', component: MultimediaComponent },
  { path: 'actividades', component: ActividadesComponent },
  { path: 'autores', component: AutoresComponent }
];
/** array de componentes enrutables */
export const routableComponents = [  
  HomeComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
