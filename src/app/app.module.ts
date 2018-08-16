import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http'
import {ModuloRoteamento} from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ModuloRoteamento,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
