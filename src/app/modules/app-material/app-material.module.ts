import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    BrowserAnimationsModule
  ], exports: [
    MatTabsModule
  ]
})
export class AppMaterialModule { }
