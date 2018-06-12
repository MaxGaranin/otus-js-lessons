import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatSelectModule,
  MatOptionModule,
  MatDialog,
  MatDialogModule,
  MAT_DIALOG_DATA
} from '@angular/material';

import {AppComponent} from './app.component';
import {RecentlyAddedComponent} from './recently-added/recently-added.component';
import {SettingsComponent} from './settings/settings.component';
import {GoComponent} from './go/go.component';
import {AddNewComponent} from './add-new/add-new.component';
import {TranslatorService} from "./translator.service";
import {PageNotFoundComponent} from "./not-found-component";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    RecentlyAddedComponent,
    SettingsComponent,
    GoComponent,
    AddNewComponent,
    PageNotFoundComponent
  ],
  entryComponents: [
    AddNewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    AppRoutingModule,
    MatDialogModule
  ],
  providers: [
    TranslatorService,
    MatDialog,
    {provide: MAT_DIALOG_DATA, useValue: {}},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
