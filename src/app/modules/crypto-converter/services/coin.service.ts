import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private http: HttpClient) { }

  private url = environment.uralApi;
  private coinReference = 'btc';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    })
  };

  getPrices(): Observable<any> {
    return this.http.get<any>(`${this.url}/prices?coin=${this.coinReference}`, this.httpOptions);
  }

  convert(mount: number, coin1: string, coin2: string): Observable<any> {
    return this.http.get<any>(`${this.url}/convert?qty=${mount}&from=${coin1}&to=${coin2}`, this.httpOptions);
  }
}
