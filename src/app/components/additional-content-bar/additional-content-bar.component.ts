import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-additional-content-bar',
  templateUrl: './additional-content-bar.component.html',
  styleUrls: ['./additional-content-bar.component.scss']
})
export class AdditionalContentBarComponent {

  @Input() public genre: string;

}
