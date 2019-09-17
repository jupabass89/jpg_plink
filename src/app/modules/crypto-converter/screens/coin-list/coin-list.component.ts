import { Component, OnInit, Input } from '@angular/core';
import { Coin } from '../../models/coin';
import { CoinService } from '../../services/coin.service';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent implements OnInit {
  coins: Coin[];
  increase = 20;
  max = 20;
  renderedCoins: Coin[];
  throttle = 600;

  constructor(private coinService: CoinService) { }

  ngOnInit() {
    this.coinService.getPrices().subscribe(response => {
      response.prices.map(res => {
        res.price = new Intl.NumberFormat('en-us', { minimumFractionDigits: 1 }).format(res.price);
        res.crypto === '0' ? res.crypto = 'NO' : res.crypto = 'YES';
      });
      this.coins = response.prices;
      this.renderedCoins = this.coins.slice(0, this.max);
    });
  }

  onScrollDown() {
    this.renderedCoins = this.renderedCoins.concat(this.coins.slice(this.max, this.max + this.increase));
    this.max += this.increase;
  }
}
