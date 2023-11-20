import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FiltreComponent } from './components/filtre/filtre.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { MiniCardComponent } from './components/mini-card/mini-card.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CardItemComponent } from './components/catalog/card-item/card-item.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FiltreComponent,
    HomeComponent,
    CardComponent,
    MiniCardComponent,
    CatalogComponent,
    CardItemComponent,
    CarrinhoComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
