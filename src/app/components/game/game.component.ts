import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  messageForUser: string;
  rolled: number;

  constructor() {
  }

  ngOnInit(): void {
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
}
