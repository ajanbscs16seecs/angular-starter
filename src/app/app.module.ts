import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { DemoMaterialModule } from './material.module';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MarkdownModule } from 'ngx-markdown';


import { environment } from '../environments/environment';
import { MainService } from './_services/main.service';
import { AngularFirestoreModule } from '../../node_modules/angularfire2/firestore';
import { AMainComponent } from './a-main/a-main.component';


@NgModule({
  declarations: [
    AppComponent,
    AMainComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    AngularFireModule.initializeApp(environment.firebase, 'tobechangedfornotifications'),
    AngularFirestoreModule.enablePersistence(), // imports firebase/firestore, only needed for database features
    MarkdownModule.forRoot(),
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
