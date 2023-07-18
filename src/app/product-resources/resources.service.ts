import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class ProductService {
  private url = 'https://api-als2.nutramax.com/items/myproducts?limit=-1';

  constructor(private httpClient: HttpClient) { }

  getPosts() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    return this.httpClient.get(this.url, {
      headers: headers,
    });
  }
}
