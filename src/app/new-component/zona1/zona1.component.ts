import {Component, OnInit} from '@angular/core';
import {NewComponentService} from '../new-component.service';

@Component({
  selector: 'app-zona1-component',
  templateUrl: './zona1.component.html',
  styleUrls: ['./zona1.component.scss']
})
export class Zona1Component implements OnInit  {
  arrWith2861: any = this.componentService.getFirstZoneP1();
  arrWith2971: any = this.componentService.getFirstZoneP2();
  arrWith2973: any = this.componentService.getFirstZoneP3();
  sortedData1: any;
  arrWith2970: any = this.componentService.getFirstZoneP5();
  arrWith2979: any = this.componentService.getFirstZoneP6();
  arrWith2980: any = this.componentService.getFirstZoneP7();
  arrWith2974: any = this.componentService.getFirstZoneP4();

  constructor(private componentService: NewComponentService) {
  }

  ngOnInit() {
    this.arrWith2974.subscribe(
      (data: any) => {
        this.sortedData1 = data.sort(this.compareData);
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
