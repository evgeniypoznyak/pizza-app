import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  private readonly URL = 'http://files.olo.com/pizzas.json';

  constructor(private http: HttpClient) { }

  public getPizzas(): Observable<Data> {
    return this.http.get<Observable<Data>>(this.URL);
  }

}
