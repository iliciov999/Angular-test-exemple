import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class NewComponentService {
  private _jsonURL = 'assets/data.json';
  constructor(private http: HttpClient) {
  }
  public getFirstZoneP1() {
    return this.http.get(this._jsonURL).pipe(
      map( (x: any) => x.filter( (i: any) => i.id === 2861 || i.joinedWith === 2861 )));
  }
  public getFirstZoneP2() {
    return this.http.get(this._jsonURL).pipe(
      map( (x: any) => x.filter( (i: any) => i.id === 2971 || i.joinedWith === 2971 )));
  }
  public getFirstZoneP3() {
    return this.http.get(this._jsonURL).pipe(
      map( (x: any) => x.filter( (i: any) => i.id === 2973 || i.joinedWith === 2973 )));
  }
  public getFirstZoneP4() {
    return this.http.get(this._jsonURL).pipe(
      map( (x: any) => x.filter( (i: any) => i.id === 2974 || i.joinedWith === 2974 )));
  }
  public getFirstZoneP5() {
    return this.http.get(this._jsonURL).pipe(
      map( (x: any) => x.filter( (i: any) => i.id === 2970 || i.joinedWith === 2970 )));
  }
  public getFirstZoneP6() {
    return this.http.get(this._jsonURL).pipe(
      map( (x: any) => x.filter( (i: any) => i.id === 2979 || i.joinedWith === 2979 )));
  }
  public getFirstZoneP7() {
    return this.http.get(this._jsonURL).pipe(
      map( (x: any) => x.filter( (i: any) => i.id === 2980 || i.joinedWith === 2980 )));
  }
  public getFirstZoneP8() {
    return this.http.get(this._jsonURL).pipe(
      map( (x: any) => x.filter( (i: any) => i.id === 2966 || i.joinedWith === 2966 )));
  }
  public getFirstZoneP9() {
    return this.http.get(this._jsonURL).pipe(
      map( (x: any) => x.filter( (i: any) => i.id === 3003 || i.joinedWith === 3003 )));
  }
  public getFirstZoneP10() {
    return  this.http.get(this._jsonURL).pipe(
      map( (x: any) => x.filter( (i: any) => i.id === 3014 || i.joinedWith === 3014 )));
  }
}
