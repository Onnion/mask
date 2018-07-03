import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaskDirective } from './shared/directives/mask.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CpfPipe, CnpjPipe} from './shared/pipes/index'

@NgModule({
  declarations: [
    AppComponent,
    MaskDirective,
    CpfPipe,
    CnpjPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
