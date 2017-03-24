import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Drink} from './app.drinks';

@Injectable()

export class drinkService {

constructor(private http: Http) {}

private drinkUrl = "http://claremontbarwebapi.azurewebsites.net/api/Products";

apiUrl: string;

handleError() {
    // error
    console.log(this);
}

getDrinks(): Promise<Drink[]> {
    return this.http.get(this.drinkUrl)
    .toPromise()
    .then(response => response.json() as Drink[])
    .catch(this.handleError);
}





}