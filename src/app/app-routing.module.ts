import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { AccountComponent } from './pages/account/account.component';
import { CreateComponent } from './pages/create/create.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'carrinho', component:CarrinhoComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'login', component:AccountComponent},
  {path:'create', component:CreateComponent},
  {path:'checkout', component:CheckoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
