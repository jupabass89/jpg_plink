import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CoinService } from './services/coin.service';

@Component({
  selector: 'app-crypto-converter',
  templateUrl: './crypto-converter.component.html',
  styleUrls: ['./crypto-converter.component.scss']
})
export class CryptoConverterComponent implements OnInit {

  @ViewChild('tabs', { static: true }) tabs;
  idxTab = new FormControl();
  changeTabLabel = 'MAKE CHANGE';
  currencyTabLabel = 'CURRENCY LIST';

  constructor(private coinService: CoinService) { }

  ngOnInit() {
    this.coinService.crypto.subscribe(() => {
      this.idxTab.setValue(0);
    });
  }
}
