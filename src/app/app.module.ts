import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {HomeModule} from './home/home.module';
import {MenuComponent} from './shared/menu/menu.component';
import {FooterComponent} from './shared/footer/footer.component';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
import {FroalaEditorModule, FroalaViewModule} from 'angular-froala-wysiwyg';
import { EscapeHtmlPipe } from './shared/keep-html.pipe';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        HomeModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        FroalaEditorModule.forRoot(),
        FroalaViewModule.forRoot()
    ],
    providers: [
        AngularFireDatabase
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
