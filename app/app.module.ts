import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { AppComponent }  from './app.component';
import { drinkService }   from './app.drink.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  providers:    [ drinkService ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
})

export class AppModule { }
