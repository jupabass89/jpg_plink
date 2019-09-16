import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoConverterComponent } from './crypto-converter.component';
import { CoinListComponent } from './screens/coin-list/coin-list.component';
import { ConverterComponent } from './screens/converter/converter.component';
import { CoinComponent } from './components/coin/coin.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { CoinService } from './services/coin.service';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
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
    ReactiveFormsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
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
