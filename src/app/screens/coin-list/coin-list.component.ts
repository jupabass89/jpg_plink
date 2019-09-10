import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent implements OnInit {

  cripto = false;

  item1 = {
    name: 'BTC',
    price: '14000',
    cripto: 'yes'
  };

  item2 = {
    name: 'USD',
    price: '14000',
    cripto: 'yes'
  };

  item3 = {
    name: 'AsiaCoin',
    price: '15000',
    cripto: 'no'
  };

  items = [
    this.item1,
    this.item3,
    this.item1,
    this.item3,
    this.item2,
    this.item3,
    this.item1,
    this.item2,
    this.item1,
    this.item3,
    this.item1,
    this.item3,
    this.item2,
    this.item3,
    this.item3,
    this.item1,
    this.item3,
    this.item2,
    this.item3,
    this.item3,
    this.item2,
    this.item3,
    this.item1,
    this.item2,
    this.item1,
    this.item3
  ];

  increaseSize = 20;
  currentMax = 20;
  visibleCoins = this.items;
  throttle = 600;
  scrollDistance = 3;

  linesToWrite = this.items;

  constructor() { }

  ngOnInit() {
    this.visibleCoins = this.items.slice(0, this.currentMax);
  }

  onScrollDown() {
    // this.visibleCoins = this.visibleCoins.concat(this.items.slice(this.currentMax, this.currentMax + this.increaseSize));
    // this.currentMax += this.increaseSize;
    console.log('scroll');
  }
}
