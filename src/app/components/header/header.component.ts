import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { RickAndMorty } from 'src/app/models/api';
import { Config } from 'src/app/pages/home/home.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() config: Config;
  @Output() setConfig = new EventEmitter<Config>();
  @Input() movil = false;

  menu = [
    {
      url: '../../../assets/img/minisode.png',
      urlM: '../../../assets/img/rick.png',
      name: 'Personajes',
      accion: 'personajes',
    },
    {
      url: '../../../assets/img/minisode2.png',
      urlM: '../../../assets/img/morty.png',
      name: 'Episodios',
      accion: 'episodios',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  sendConfig(selected) {
    this.setConfig.emit({ ...this.config, selected });
  }
}
