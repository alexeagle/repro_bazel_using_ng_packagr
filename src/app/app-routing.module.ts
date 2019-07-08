import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'page-one',
    loadChildren: () => import('./page-one/page-one.module.ngfactory').then(m => m.PageOneModuleNgFactory)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
