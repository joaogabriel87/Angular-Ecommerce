import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FiltreComponent } from './components/filtre/filtre.component';
import { DropmenuComponent } from './components/dropmenu/dropmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FiltreComponent,
    DropmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
