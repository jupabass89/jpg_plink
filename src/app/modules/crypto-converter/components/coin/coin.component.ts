import { Component, OnInit, Input } from '@angular/core';
import { Coin } from '../../models/coin';
import { CoinService } from '../../services/coin.service';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss']
})
export class CoinComponent {

  constructor(private coinService: CoinService) { }

  @Input() coin: Coin;

  shuffleCrypto() {
    this.coinService.changeCoin(this.coin.id_currency);
  }
}
