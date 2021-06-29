import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

const COMMON_MODULES = [
  CommonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  FlexLayoutModule,
  MatListModule,
  MatDividerModule,
];

const COMMON_DECLARATIONS = [LayoutComponent];

@NgModule({
  imports: [COMMON_MODULES, RouterModule],
  declarations: COMMON_DECLARATIONS,
  exports: COMMON_DECLARATIONS,
})
export class LayoutModule {}

export default { COMMON_DECLARATIONS, COMMON_MODULES };
