import { Component, Input } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent {
  @Input() public onSearch: (input: string) => void;

  public performSearch = (event: KeyboardEvent) => {
    event.preventDefault();
    this.onSearch((event.target as HTMLInputElement).value.toLowerCase());
  };
}
