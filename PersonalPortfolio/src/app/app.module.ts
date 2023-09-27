import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgsRevealModule} from 'ngx-scrollreveal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgsRevealModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
