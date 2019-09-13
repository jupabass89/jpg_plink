import { Component, OnInit } from '@angular/core';
import { CoinService } from '../../services/coin.service';
import { observable, Observable } from 'rxjs';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  constructor(private coinService: CoinService, private formBuilder: FormBuilder) { }

  title = 'Realizar cambio';
  subtitle = 'Seleccione las monedas';
  coins = [];
  form: FormGroup;
  result: '';
  amount = '0,00';


  ngOnInit() {
    this.getCoins();

    this.form = this.formBuilder.group({
      amount: ['', Validators.compose([Validators.required, Validators.min(0)])],
      from: ['BTC', Validators.compose([Validators.required])],
      to: ['USD', Validators.compose([Validators.required])],
    });
  }

  convertCoins() {
    if (this.amount !== ('0,00' && '0') && this.amount !== '') {
      const amount = this.form.get('amount').value;
      const from = this.form.get('from').value;
      const to = this.form.get('to').value;
      this.coinService.convert(amount, from, to).subscribe(res => {
        console.log(res);
        return this.result = res.to_quantity;
      });
    }
    this.amount = '0,00';
    return this.result = '';
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



