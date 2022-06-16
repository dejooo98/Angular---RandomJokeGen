import { JokeService } from './services/joke.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  jokes: any[] = [];
  jokeCategories: any[] = [];
  globalCategory: any = '';

  constructor(private jokesService: JokeService) {}

  ngOnInit() {
    this.jokesService.getJokeCategories().subscribe((categories: any) => {
      this.jokeCategories = categories;
    });
  }

  searchByCategory(category: string) {
    this.globalCategory = category;
    this.jokesService.getJokeFromCategory(category).subscribe((joke) => {
      this.jokes = [];
      this.jokes.push(joke);
    });
  }

  jokeOnClick() {
    if (this.globalCategory !== '') {
      this.searchByCategory(this.globalCategory);
    } else {
      this.jokesService.getRandomJoke().subscribe((joke) => {
        this.jokes = [];
        this.jokes.push(joke);
      });
    }
  }
}
