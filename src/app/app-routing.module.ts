import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NodepagComponent } from './componentes/body/nodepag/nodepag.component';
import { ExpresspagComponent } from './componentes/body/expresspag/expresspag.component';

const routes: Routes = [
  { path: 'node', component: NodepagComponent},
  { path: 'express', component: ExpresspagComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
