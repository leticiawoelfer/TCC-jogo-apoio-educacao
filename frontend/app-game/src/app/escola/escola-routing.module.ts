import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscolaFormComponent } from './escola-form/escola-form.component';
import { EscolaListComponent } from './escola-list/escola-list.component';

const routes: Routes = [
  {path: 'escola-form', component: EscolaFormComponent},
  {path: 'escola-list', component: EscolaListComponent},
  {path: 'escola-list/:id', component: EscolaListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EscolaRoutingModule { }
