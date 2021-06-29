import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

const COMMON_IMPORTS = [CommonModule, FlexLayoutModule, MatIconModule];

const COMMON_DECLARATIONS = [HomeComponent];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: COMMON_IMPORTS,
  exports: COMMON_DECLARATIONS,
})
export class HomeModule {}

export default { COMMON_DECLARATIONS, COMMON_IMPORTS };
