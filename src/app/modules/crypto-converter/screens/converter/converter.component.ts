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
  from = 'BTC';
  to = 'USD';
  form: FormGroup;
  result: '';

  ngOnInit() {
    // get all coins
    this.coinService.getPrices().subscribe((res) => {
      res.prices.map(coin => {
        coin = coin.name;
        this.coins.push(coin);
      });
      this.coins.sort();
    });

    // set a form
    this.form = this.formBuilder.group({
      amount: ['0,00', Validators.compose([Validators.required, Validators.min(0)])],
      from: ['', Validators.compose([Validators.required])],
      to: ['', Validators.compose([Validators.required])],
    });



    this.convertCoins();
  }

  convertCoins() {
    const amount = this.form.get('amount').value;
    const from = this.form.get('from').value;
    const to = this.form.get('to').value;
    this.coinService.convert(amount, from, to).subscribe(res => {
      console.log(res);
      this.result = res.to_quantity;
    });
  }

}



