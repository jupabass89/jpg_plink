import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CoinService } from '../../services/coin.service';
import { fromEvent, Observable } from 'rxjs';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  constructor(private coinService: CoinService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      amount: ['', Validators.compose([Validators.required, Validators.min(0)])],
      from: ['', Validators.compose([Validators.required])],
      to: ['', Validators.compose([Validators.required])],
    });
  }

  @ViewChild('amount', { static: true }) amount: ElementRef;
  coins = [];
  form: FormGroup;
  result: 0;
  defCoin = 'USD';
  defCrypto = 'BTC';
  $currentCoin: Observable<any>;

  ngOnInit() {
    this.getCoins();
    this.amountChanges();
    this.coinService.crypto.subscribe(res => {
      this.form.get('to').setValue(res);
      this.convertCoins();
    });
  }

  getCoins() {
    this.coinService.getPrices().subscribe((res) => {
      res.prices.map(coin => {
        coin = coin.id_currency;
        this.coins.push(coin);
      });
      this.setDefaults();
    });
  }

  setDefaults() {
    this.form.get('from').setValue(this.defCrypto);
    this.form.get('to').setValue(this.defCoin);
    this.coins.push(this.defCrypto);
    this.coins.sort();
  }

  amountChanges() {
    fromEvent(this.amount.nativeElement, 'keyup').pipe(
      map((event: any) => {
        return event.target.value;
      })
      , debounceTime(200)
    ).subscribe((amount: number) => {
      this.convertCoins(amount);
    });
  }

  convertCoins(amount?: number) {
    if (!amount) { amount = this.form.get('amount').value; }
    if (!this.form.invalid && this.form.get('amount').value !== '' && this.form.get('amount').value !== 0) {
      const from = this.form.get('from').value;
      const to = this.form.get('to').value;
      this.coinService.convert(amount, from, to).subscribe(res => {
        this.result = res.to_quantity;
      });
    } else {
      this.result = null;
      this.form.get('amount').setValue(null);
    }
  }

  exchange() {
    const from = this.form.get('from').value;
    const to = this.form.get('to').value;
    this.form.get('from').setValue(to);
    this.form.get('to').setValue(from);
    this.convertCoins(this.form.get('amount').value);
  }
}
