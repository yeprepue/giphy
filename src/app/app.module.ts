import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/components/counter.module';
import { HeroesComponent } from './heroes/components/heroes.module';

import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesComponent,
    DbzModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
