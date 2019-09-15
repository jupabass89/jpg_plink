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

  constructor(private coinService: CoinService) { }

  ngOnInit() {
    this.coinService.getPrices().subscribe(response => {
      response.prices.map(res => {
        res.price = new Intl.NumberFormat('en-us', { minimumFractionDigits: 1 }).format(res.price);
        res.crypto === '0' ? res.crypto = 'No' : res.crypto = 'Yes';
      });
      this.coins = response.prices;
    });
  }

  onScrollDown() {
    //console.log('scroll');
  }
}
