import { Component, OnInit } from '@angular/core';
import { CoinService } from '../../services/coin.service';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  constructor(private coinService: CoinService) { }

  title = 'Realizar cambio';
  subtitle = 'Seleccione las monedas';
  initialMount = 3;
  coins = [];
  result: number;

  ngOnInit() {

    this.coinService.getPrices().subscribe((res) => {
      res.prices.map(coin => {
        coin = coin.name;
        this.coins.push(coin);
      });
      this.coins.sort();
    });

    this.coinService.convert(this.initialMount, 'btc', 'usd').subscribe(res => {
      this.result = res.to_quantity;
    });
  }
}

