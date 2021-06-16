import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EscolaRoutingModule } from './escola-routing.module';
import { EscolaFormComponent } from './escola-form/escola-form.component';
import { EscolaListComponent } from './escola-list/escola-list.component';


@NgModule({
  declarations: [
    EscolaFormComponent,
    EscolaListComponent
  ],
  imports: [
    CommonModule,
    EscolaRoutingModule
  ],
  exports: [
    EscolaFormComponent,
    EscolaListComponent
  ]
})
export class EscolaModule { }
