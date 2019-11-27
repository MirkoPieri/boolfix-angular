import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, Input} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api_key = '7281fa587a1cb4960ded5c5f97ee3e8d';
  page = '1';
  query = 'ritorno al futuro';

  constructor(private httpClient: HttpClient) { }

  public getPages(){
    return this.httpClient.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}&query=${this.query}`);
  }

  public getFilms(){
    return this.httpClient.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}&query=${this.query}&page=${this.page}`);
  }
}
