import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RickAndMorty, Results } from 'src/app/models/api';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('search') search: ElementRef;
  data: RickAndMorty;
  dataFilter: RickAndMorty;
  config: Config = {
    selected: 'personajes',
    page: {
      personajes: 1,
      episodios: 1,
    },
  };

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.data = this.api.retornarDatos();
  }

  cambioMenu($event: Config) {
    this.config = $event;
  }

  filtrar(): Array<any> {
    const criterio = this.search
      ? this.search.nativeElement.value.toLowerCase()
      : '';
    if (criterio !== '') {
      return this.data[this.config.selected].results.filter(
        (item: Results) => item.name.toLowerCase().indexOf(criterio) > 0
      );
    } else {
      return this.data[this.config.selected].results;
    }
  }

  traerDatos($event) {
    this.api.cambioPagina($event);
    this.config.page[this.config.selected] = $event;
  }
}

export interface Config {
  selected: string;
  page: {
    personajes: number;
    episodios: number;
  };
}
