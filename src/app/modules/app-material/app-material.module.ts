import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    BrowserAnimationsModule,
    ScrollingModule
  ], exports: [
    MatTabsModule,
    ScrollingModule
  ]
})
export class AppMaterialModule { }
