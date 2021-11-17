import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadopostsPageRoutingModule } from './listadoposts-routing.module';

import { ListadopostsPage } from './listadoposts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadopostsPageRoutingModule
  ],
  declarations: [ListadopostsPage]
})
export class ListadopostsPageModule {}
