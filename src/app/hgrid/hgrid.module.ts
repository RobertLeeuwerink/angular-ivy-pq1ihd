import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IgxHierarchicalGridModule, IgxSwitchModule } from 'igniteui-angular';

import { HgridRoutingModule } from './hgrid-routing.module';
import { HgridComponent } from './hgrid.component';
import { HierarchicalGridComponent } from './hierarchical-grid/hierarchical-grid.component';

@NgModule({
  declarations: [HgridComponent, HierarchicalGridComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IgxHierarchicalGridModule,
    IgxSwitchModule,
    HgridRoutingModule,
  ],
})
export class HgridModule {}
