import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import data from "../../../movie.mock-data";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent {
  title = "details";
  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.events.subscribe(value => {
      if (value.toString().includes("urlAfterRedirects")) {
        const url = router.url.toString();
        const regexPattern = /\d+/gm;
        if (url.match(regexPattern) === null) {
          return;
        }
        const id = parseInt(url.match(regexPattern)[0]);
        this.movieId = id;
        this.specMovie = this.getSpecificMovie(id);
        this.ofSameGenre = this.movies.filter(
          movie =>
            movie.genres.includes(this.specMovie.genres[0]) &&
            !movie.name.includes(this.specMovie.name)
        );
      }
    });
  }

  public movieId = parseInt(this.route.snapshot.paramMap.get("id"));
  public movies = data;
  public getSpecificMovie = movieId => {
    const specificMovie = this.movies.filter(movie => {
      return movie.id === movieId;
    });
    return specificMovie[0];
  };
  public specMovie = this.getSpecificMovie(this.movieId);
  public ofSameGenre = this.movies.filter(
    movie =>
      movie.genres.includes(this.specMovie.genres[0]) &&
      !movie.name.includes(this.specMovie.name)
  );
  public selectedImage;

  public selectImage = (id: number) => {
    this.router.navigate(["details", id]);
    this.movieId = id;
    this.specMovie = this.getSpecificMovie(id);
    this.ofSameGenre = this.movies.filter(
      movie =>
        movie.genres.includes(this.specMovie.genres[0]) &&
        !movie.name.includes(this.specMovie.name)
    );
  };

  public deselectImage = () => {
    this.selectedImage = undefined;
  };

  public onClick() {
    this.router.navigate(["/"]);
  }
}
