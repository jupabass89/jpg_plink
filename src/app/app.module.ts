import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConverterComponent } from './screens/components/converter/converter.component';
import { CoinListComponent } from './screens/components/coin-list/coin-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent,
    CoinListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
