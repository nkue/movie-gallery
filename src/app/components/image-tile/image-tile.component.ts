import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-tile',
  templateUrl: './image-tile.component.html',
  styleUrls: ['./image-tile.component.scss']
})
export class ImageTileComponent implements OnInit {

  @Input() public src: string;
  @Input() public alt: string;
  @Input() public onClick: (index: number) => void;
  @Input() public id: number;

  public doStuff = (event: MouseEvent) => {
    event.preventDefault();
    this.onClick(this.id);
  }

  constructor() { }

  ngOnInit() {
  }
}
