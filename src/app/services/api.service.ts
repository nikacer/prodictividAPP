import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RickAndMorty, Personajes, Episodios } from '../models/api';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _data: RickAndMorty = {} as RickAndMorty;
  private _path = environment.api;

  constructor(private _http: HttpClient) {
    this._obtenerData();
  }

  private _obtenerData(page = 1) {
    const personaje = this._http
      .get(`${this._path}/location?page=${page}`)
      .subscribe((personajes: Personajes) => {
        this._data.personajes = personajes;
        personaje.unsubscribe();
      });

    const episodio = this._http
      .get(`${this._path}/episode?page=${page}`)
      .subscribe((episodios: Episodios) => {
        this._data.episodios = episodios;
        episodio.unsubscribe();
      });
  }

  retornarDatos(): RickAndMorty {
    return this._data;
  }

  cambioPagina(page) {
    this._obtenerData(page);
  }
}
