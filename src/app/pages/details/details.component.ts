import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { Movie, mockData } from "../../../movie.mock-data";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
  title = "details";

  public movies = mockData;
  public movieId?: number;
  public specMovie?: Movie;
  public ofSameGenre?: Movie[];
  public selectedImage?: string;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe({
      next: parameter => {
        this.movieId = parseInt(parameter.get("id"));
        this.specMovie = this.getSpecificMovie(this.movieId);
        this.ofSameGenre = this.movies.filter(
          movie =>
            movie.genres.includes(this.specMovie.genres[0]) &&
            !movie.name.includes(this.specMovie.name)
        );
      }
    });
  }

  private getSpecificMovie = (movieId: number) => {
    const specificMovie = this.movies.filter(movie => {
      return movie.id === movieId;
    });
    return specificMovie[0];
  };

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

  public onMainClick = () => {
    event.stopPropagation()
  }

  public onClick = () => {
    this.router.navigate(["/"]);
  }
}
