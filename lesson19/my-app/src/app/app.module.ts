import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatSelectModule,
  MatOptionModule,
  MatGridListModule,
  MatDialog,
  MatDialogModule,
  MAT_DIALOG_DATA
} from '@angular/material';

import { AppComponent } from './app.component';
import { RecentlyAddedComponent } from './recently-added/recently-added.component';
import { SettingsComponent } from './settings/settings.component';
import { GoComponent } from './go/go.component';
import { AddNewComponent } from './add-new/add-new.component';
import { TranslatorService } from "./translator.service";
import { PageNotFoundComponent } from "./not-found.component";
import { AppRoutingModule } from "./app-routing.module";
import { PipeModule } from './pipe.module';
import { WordService } from './word.service';
import { DataStoreService } from './data-store.service';

import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    RecentlyAddedComponent,
    SettingsComponent,
    GoComponent,
    AddNewComponent,
    PageNotFoundComponent,
  ],
  entryComponents: [
    AddNewComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'language-translator'}),
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogModule,
    MatGridListModule,
    PipeModule,
  ],
  providers: [
    TranslatorService,
    WordService,
    DataStoreService,
    MatDialog,
    { provide: MAT_DIALOG_DATA, useValue: {} },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
