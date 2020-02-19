import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() public onSearch;

  constructor() { }

  ngOnInit() {
  }

  public performSearch = (event) => {
    event.preventDefault();
    this.onSearch(event.target.value.toLowerCase());
  }

}
