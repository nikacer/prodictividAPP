import { Component, OnInit, Input } from '@angular/core';
import { Config } from 'src/app/pages/home/home.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() data: CardInterface;
  @Input() config: Config;

  isVisible: false;

  constructor() {}

  ngOnInit(): void {}

  handle() {
    this.isVisible = false;
  }
}

interface CardInterface {
  name: string;
  especies: string;
  [tag: string]: any;
}
