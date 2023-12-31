import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CarrinhoServiceService } from 'src/app/services/carrinho-service.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent  {
  
  itensNoCarrinho: any[];

  constructor(private carrinhoService: CarrinhoServiceService, private router: Router) {
    this.itensNoCarrinho = this.carrinhoService.obterItensNoCarrinho();
    console.log('Itens no Carrinho:', this.itensNoCarrinho);
  }
  
  

  removerDoCarrinho(item: any) {
    console.log('Removendo do carrinho:', item);
    this.carrinhoService.removerDoCarrinho(item);
  }
  

  calcularPrecoTotal() {
   return this.carrinhoService.calcularPrecoTotal();
  }

  finalizarCompra() {
  this.router.navigate(['/checkout']);
  }
}
