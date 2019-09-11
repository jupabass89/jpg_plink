import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CryptoConverterModule } from './modules/crypto-converter/crypto-converter.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CryptoConverterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
