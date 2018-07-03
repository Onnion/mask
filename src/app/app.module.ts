import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaskDirective } from './shared/directives/mask.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CpfPipe} from './shared/pipes/cpf.pipe'

@NgModule({
  declarations: [
    AppComponent,
    MaskDirective,
    CpfPipe
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
