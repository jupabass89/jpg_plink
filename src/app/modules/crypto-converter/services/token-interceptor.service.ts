import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { CoinService } from './coin.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    const toquenized = req.clone({
      setHeaders: {
        'X-RapidAPI-Host': `bravenewcoin-v1.p.rapidapi.com`,
        'X-RapidAPI-Key': `2e56d0dd0cmsh9bfe6afbac883b6p10bce6jsn19fac3d4f84b`
      }
    });
    return next.handle(toquenized);
  }
}
