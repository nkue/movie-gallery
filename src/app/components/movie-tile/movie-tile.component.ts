import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: ['./movie-tile.component.scss']
})
export class ImageTileComponent {

  @Input() public src: string;
  @Input() public alt: string;
  @Input() public onClick: (index: number) => void;
  @Input() public id: number;

  public selectImage = (event: MouseEvent) => {
    event.preventDefault();
    this.onClick(this.id);
  }
}
