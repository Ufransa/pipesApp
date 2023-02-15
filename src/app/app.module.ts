import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

/* TODO 1: Configuración pipe locale date */
import localeEs from '@angular/common/locales/es'
import { registerLocaleData } from "@angular/common";
registerLocaleData( localeEs )

import localeFR from '@angular/common/locales/fr'
registerLocaleData( localeFR )


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
