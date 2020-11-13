import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
// import { MaterialModuleModule } from "../app/shared/modules/material-module.module";
//import { MatListModule } from "../app/shared/modules/material-module.module";


@NgModule({
  declarations: [
   // AppComponent
  ],
  imports: [
    HttpClientModule, BrowserModule, CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
