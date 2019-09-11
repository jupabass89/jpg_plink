import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoConverterComponent } from './crypto-converter.component';
import { CoinListComponent } from './screens/coin-list/coin-list.component';
import { ConverterComponent } from './screens/converter/converter.component';
import { CoinComponent } from './components/coin/coin.component';
import { AppMaterialModule } from '../app-material/app-material.module';

@NgModule({
  declarations: [
    CryptoConverterComponent,
    CoinListComponent,
    ConverterComponent,
    CoinComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule

  ], exports: [
    CryptoConverterComponent
  ]
})
export class CryptoConverterModule { }
