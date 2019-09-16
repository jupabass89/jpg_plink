import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoConverterComponent } from './crypto-converter.component';
import { CoinListComponent } from './screens/coin-list/coin-list.component';
import { ConverterComponent } from './screens/converter/converter.component';
import { CoinComponent } from './components/coin/coin.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { CoinService } from './services/coin.service';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CryptoConverterComponent,
    CoinListComponent,
    ConverterComponent,
    CoinComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ], exports: [
    CryptoConverterComponent
  ],
  providers: [
    CoinService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
})
export class CryptoConverterModule { }
