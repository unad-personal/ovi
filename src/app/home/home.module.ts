import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home/home.component';
import {EscapeHtmlPipe} from "../shared/keep-html.pipe";

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule
    ],
    declarations: [HomeComponent,
        EscapeHtmlPipe]
})
export class HomeModule {
}
