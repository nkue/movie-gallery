import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-additional-content-bar',
  templateUrl: './additional-content-bar.component.html',
  styleUrls: ['./additional-content-bar.component.scss']
})
export class AdditionalContentBarComponent implements OnInit {

  @Input() public genre;

  constructor() { }

  ngOnInit() {
  }

}
