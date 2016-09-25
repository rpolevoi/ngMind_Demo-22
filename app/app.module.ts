import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';

import { AppComponent }  from './app.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule],
  declarations: [ AppComponent, ChildComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
