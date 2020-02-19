import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { mockData, allGenres } from "../../../movie.mock-data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "main";
  constructor(private router: Router) {}

  public movies = mockData;
  public allGenres = allGenres;
  public filteredMovies = this.movies;
  public selectedImage?: string;
  public searchString?: string;
  public selectedGenre: string = "All";

  public selectImage = (id: number) => {
    this.router.navigate(["details", id]);
  };

  public deselectImage = () => {
    this.selectedImage = undefined;
  };

  public onSearch = (input: string) => {
    this.searchString = input;
    this.filterMovies();
  };

  private filterMovies = () => {
    this.filteredMovies = this.movies.filter(movie => {
      const validSearchString =
        this.searchString && this.searchString.length > 0
          ? movie.name.toLowerCase().includes(this.searchString)
          : true;
      const validGenres =
        this.selectedGenre !== "All"
          ? movie.genres.includes(this.selectedGenre)
          : true;

      return validSearchString && validGenres;
    });
  };

  public onSelectChange = (element: EventTarget) => {
    const value = (element as HTMLSelectElement).value;
    this.selectedGenre = value;
    this.filterMovies();
  };
}
