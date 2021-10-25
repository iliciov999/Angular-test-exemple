import { Component } from '@angular/core';
import {NewComponentService} from '../new-component.service';

@Component({
  selector: 'app-zona2-component',
  templateUrl: './zona2.component.html',
  styleUrls: ['./zona2.component.scss']
})
export class Zona2Component {
  arrWith2966: any = this.componentService.getFirstZoneP8();

  constructor(private componentService: NewComponentService) {
  }
}
