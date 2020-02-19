import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { mockData } from "../../../movie.mock-data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "main";
  constructor(private router: Router) {}

  public movies = mockData;
  public filteredMovies = this.movies;
  public selectedImage?: string;

  public selectImage = (id: number) => {
    this.router.navigate(["details", id]);
  };

  public deselectImage = () => {
    this.selectedImage = undefined;
  };

  public onSearch = (input: string) => {
    if (input.length === 0) {
      this.filteredMovies = this.movies;
      return;
    }
    this.filteredMovies = this.filteredMovies.filter(
      movie => movie.name.toLowerCase().includes(input)
      // Object.entries(movie).forEach(([key, value]) => {
      //   if (key === 'name' && value.toString().toLowerCase().includes(input)) {
      //     filteredMovies.push(movie);
      //   }
      //   if (key === 'genres' && Array.isArray(value)) {
      //     value.map(genre => {
      //       console.log(genre)
      //     })
      //   }
      // });
    );
  };
}
