import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CardModel} from './CardModel';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  constructor(private http: HttpClient) { }
  url = 'http://localhost:8080/book';

  getAll() {
    return this.http.get<CardModel[]>(this.url + '/all');
  }

  getById(uuid: number) {
    return this.http.get<CardModel>(this.url + '/' + uuid);
  }
}
