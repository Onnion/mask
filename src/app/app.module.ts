import { Routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaskDirective } from './shared/directives/mask.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CpfPipe, CnpjPipe} from './shared/pipes/index';
import { DemoComponent } from './demo/demo.component';
import { MaskShowComponent } from './demo/mask-show/mask-show.component'


@NgModule({
  declarations: [
    AppComponent,
    MaskDirective,
    CpfPipe,
    CnpjPipe,
    DemoComponent,
    MaskShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
