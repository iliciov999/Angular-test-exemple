import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NewComponentComponent } from './new-component.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { Zona4Component } from './zona4/zona4.component';
import { Zona5Component } from './zona5/zona5.component';
import { Zona2Component } from './zona2/zona2.component';
import { Zona1Component } from './zona1/zona1.component';

@NgModule({
  declarations: [
    NewComponentComponent , Zona1Component, Zona2Component, Zona4Component, Zona5Component
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  exports: [
    NewComponentComponent
  ]
})
export class NewComponentModule { }
