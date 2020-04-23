import {Component, OnInit} from '@angular/core';
import {CurrencyClientService, RootObject} from '../../services/currency-client.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  messageForUser: string;
  rolled: number;
  rootObject: RootObject;
  result: string;

  constructor(private currencyClientService: CurrencyClientService) {
  }

  ngOnInit(): void {
    this.currencyClientService.getCurrency().subscribe(value => {
      this.rootObject = value;
    });
  }

  private rollMe(diceSize: number) {
    return Math.floor(Math.random() * Math.floor(diceSize));
  }

  sayHello(value: string) {
    this.rolled = this.rollMe(6);
    switch (this.rolled) {
      case 1:
        this.messageForUser = 'Hey ' + value + '!';
        break;
      case 2:
        this.messageForUser = 'G\'day ' + value + '!';
        break;
      case 3:
        this.messageForUser = 'Hello ' + value + '!';
        break;
      case 4:
        this.messageForUser = 'Ciao ' + value + '!';
        break;
      case 5:
        this.messageForUser = 'Salut ' + value + '!';
        break;
      case 6:
        this.messageForUser = 'Hallo ' + value + '!';
        break;
    }
  }

  check(value: number) {
    if (value > this.rootObject.rates.PLN) {
      this.result = 'Your value is too high.';
    } else if (value < this.rootObject.rates.PLN) {
      this.result = 'Your value is too low.';
    } else {
      this.result = 'Congratulations! You guested it.';
    }
  }
}
