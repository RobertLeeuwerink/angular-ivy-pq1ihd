import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HgridComponent } from './hgrid.component';

const routes: Routes = [
  {
    path: '',
    component: HgridComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HgridRoutingModule {}
