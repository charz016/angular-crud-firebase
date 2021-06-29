import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';


const COMMON_DECLARATIONS = [HomeComponent];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, FlexLayoutModule, MatIconModule],
  exports: [HomeComponent],
})
export class HomeModule { }