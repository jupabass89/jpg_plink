import { Component, OnInit, Input } from '@angular/core';
import { Coin } from '../../models/coin';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss']
})
export class CoinComponent implements OnInit {

  constructor() { }

  @Input() coin: Coin;

  ngOnInit() {
  }

}
