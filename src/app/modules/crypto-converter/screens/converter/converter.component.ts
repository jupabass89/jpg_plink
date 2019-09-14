import { Component, OnInit } from '@angular/core';
import { CoinService } from '../../services/coin.service';
import { Observable } from 'rxjs';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  constructor(private coinService: CoinService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      amount: ['', Validators.compose([Validators.required, Validators.min(1)])],
      from: ['BTC', Validators.compose([Validators.required])],
      to: ['USD', Validators.compose([Validators.required])],
    });
  }

  title = 'Realizar cambio';
  subtitle = 'Seleccione las monedas';
  coins = [];
  form: FormGroup;
  result: '';
  amount = '0,00';

  ngOnInit() {
    this.getCoins();
    this.convertCoins();
  }

  convertCoins() {
    if (this.form.invalid) {
      this.form.get('amount').setValue('0,00');
      this.result = '';
    } else {
      const amount = this.form.get('amount').value;
      const from = this.form.get('from').value;
      const to = this.form.get('to').value;
      this.coinService.convert(amount, from, to).subscribe(res => {
        this.result = res.to_quantity;
      });
    }
  }

  getCoins() {
    this.coinService.getPrices().subscribe((res) => {
      res.prices.map(coin => {
        coin = coin.id_currency;
        this.coins.push(coin);
      });
      this.coins.push('BTC');
      this.coins.sort();
    });
  }

  exchange() {
    const from = this.form.get('from').value;
    const to = this.form.get('to').value;
    this.form.get('from').setValue(to);
    this.form.get('to').setValue(from);
    this.convertCoins();
  }

  editAmount() {
    this.amount = '';
  }
}
