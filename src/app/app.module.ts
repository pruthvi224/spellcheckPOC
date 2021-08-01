import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SpellCheckerModule } from 'ngx-spellchecker';
import { HttpClientModule } from '@angular/common/http';
import { SpellCheckerService } from 'ngx-spellchecker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SpellCheckerModule
  ],
  providers: [SpellCheckerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
