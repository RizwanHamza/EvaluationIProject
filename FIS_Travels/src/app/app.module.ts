import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PackageListComponent } from './package-list/package-list.component';
import { PackageFormComponent } from './package-form/package-form.component';
import { FormsModule } from '@angular/forms';
import { PackageCostComponent } from './package-cost/package-cost.component';


@NgModule({
  declarations: [
    AppComponent,
    PackageListComponent,
    PackageFormComponent,
    PackageCostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
