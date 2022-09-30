import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PackageCostComponent } from './package-cost/package-cost.component';
import { PackageFormComponent } from './package-form/package-form.component';
import { PackageListComponent } from './package-list/package-list.component';

const routes: Routes = [
  {path:'explore', component:PackageListComponent},
  {path:'addPackage', component:PackageFormComponent},
  {path:'price',component:PackageCostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
