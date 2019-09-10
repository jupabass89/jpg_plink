import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  title = 'Realizar cambio';
  subtitle = 'Seleccione las monedas';
  initialMount = '0,00';
  coins = ['USD', 'BTC', 'COP'];

  constructor() { }

  ngOnInit() {
  }

}
