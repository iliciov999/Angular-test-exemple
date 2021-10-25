import { Component } from '@angular/core';
import {NewComponentService} from '../new-component.service';

@Component({
  selector: 'app-zona4-component',
  templateUrl: './zona4.component.html',
  styleUrls: ['./zona4.component.scss']
})
export class Zona4Component {
  arrWith3003: any = this.componentService.getFirstZoneP9();
  constructor(private componentService: NewComponentService) {
  }
}
