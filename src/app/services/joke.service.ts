import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  private jokeApi = 'https://api.chucknorris.io/jokes/';

  constructor(private http: HttpClient) {}

  getRandomJoke() {
    return this.http.get(this.jokeApi + 'random');
  }

  getJokeCategories() {
    return this.http.get(this.jokeApi + 'categories');
  }

  getJokeFromCategory(category: string) {
    return this.http.get(this.jokeApi + `random?category=${category}`);
  }
}
