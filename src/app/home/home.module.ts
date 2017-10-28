import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { LecturasComponent } from './lecturas/lecturas.component';
import { MultimediaComponent } from './multimedia/multimedia.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { AutoresComponent } from './autores/autores.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent, LecturasComponent, MultimediaComponent, ActividadesComponent, AutoresComponent]
})
export class HomeModule { }
