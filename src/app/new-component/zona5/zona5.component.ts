import {Component, OnInit} from '@angular/core';
import {NewComponentService} from '../new-component.service';

@Component({
  selector: 'app-zona5-component',
  templateUrl: './zona5.component.html',
  styleUrls: ['./zona5.component.scss']
})
export class Zona5Component implements OnInit {
  arrWith3014: any = this.componentService.getFirstZoneP10();
  sortedData2: any;
  constructor(private componentService: NewComponentService) {
  }

  ngOnInit() {
    this.arrWith3014.subscribe(
      (data: any) => {
        this.sortedData2 = data.sort(this.compareData);
      });
  }
  compareData( a: any, b: any ) {
    if (a.joinedWith === b.joinedWith) {
      return 1;
    } else if (a.joinedWith === null) {
      return -1;
    }
    return ;
  }
}
