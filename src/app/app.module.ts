import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

<<<<<<< HEAD
import { CounterModule } from './counter/components/counter.module';
import { HeroesComponent } from './heroes/components/heroes.module';

import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';


=======
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiphyComponent } from './components/giphy/giphy.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
>>>>>>> b215c8def2cb6bd350d855d95db1ff9273beaed1

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesComponent,
    DbzModule



=======
    GiphyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
>>>>>>> b215c8def2cb6bd350d855d95db1ff9273beaed1
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
