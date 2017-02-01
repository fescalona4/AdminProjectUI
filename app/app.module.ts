import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroFormComponent } from './hero-form.component';

@NgModule({
  imports:      [ BrowserModule, MaterialModule.forRoot(), FormsModule ],
  declarations: [ AppComponent, HeroFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
