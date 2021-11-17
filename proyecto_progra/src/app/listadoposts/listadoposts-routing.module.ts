import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadopostsPage } from './listadoposts.page';

const routes: Routes = [
  {
    path: '',
    component: ListadopostsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadopostsPageRoutingModule {}
