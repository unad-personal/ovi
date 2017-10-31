import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [  
  { 
    path: ':pagina', 
    component: HomeComponent, 
  }
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
