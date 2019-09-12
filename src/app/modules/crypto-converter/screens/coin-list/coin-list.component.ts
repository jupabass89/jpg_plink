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
    //convert
   // this.coinService.convert(10, 'btc', 'usd').subscribe(res => console.log(res, 'RESPONSE 1!'));

    //prices-list
    this.coinService.getPrices().subscribe(response => {
      response.prices.map(res => {
        res.price = new Intl.NumberFormat('en-us', { minimumFractionDigits: 1 }).format(res.price);
        res.crypto === '0' ? res.crypto = 'No' : res.crypto = 'Yes';
      });
      this.coins = response.prices;
      // this.coins.sort((a, b) => {
      //   if (a.name > b.name) {
      //     return 1;
      //   }
      //   if (a.name < b.name) {
      //     return -1;
      //   }
      //   return 0;
      // });
      // console.log(this.coins);
    });

    //crypto
    // this.coinService.getCryptoCoins().subscribe((res)=> {
    //   array.push(res.digital_currencies);
    // });

    //fiat
    // this.coinService.getCoins().subscribe(res =>  {
    //   array.push(res.fiat_currencies);
    // });
  }


  onScrollDown() {
    //console.log('scroll');
  }
}
