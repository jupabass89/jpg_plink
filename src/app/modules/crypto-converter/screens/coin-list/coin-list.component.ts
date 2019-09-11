import { Component, OnInit, Input } from '@angular/core';
import { Coin } from '../../models/coin';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent implements OnInit {

  coins: Coin[] = [
   {
      id_currency: '56',
      name: 'USD',
      price: '14,000',
      crypto: 'no'
    },
    {
      id_currency: '900',
      name: 'BTC',
      price: '14,000',
      crypto: 'yes'
    }
  ];

  coin1: Coin = {
    id_currency: '56',
    name: 'USD',
    price: '14,000',
    crypto: 'no'
  };

  coin2: Coin = {
    id_currency: '900',
    name: 'BTC',
    price: '14,000',
    crypto: 'yes'
  };

  constructor() { }

  ngOnInit() {
    this.coins.push(this.coin1, this.coin2);
  }

  onScrollDown() {
    console.log('scroll');
  }
}
