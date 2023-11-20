import { Component, OnInit } from '@angular/core';
import { CarrinhoServiceService } from 'src/app/services/carrinho-service.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent  {
  
  itensNoCarrinho: any[];

  constructor(private carrinhoService: CarrinhoServiceService) {
    this.itensNoCarrinho = this.carrinhoService.obterItensNoCarrinho();
  }

  removerDoCarrinho(item: any) {
    this.carrinhoService.removerDoCarrinho(item);
  }

  calcularPrecoTotal() {
    return this.carrinhoService.calcularPrecoTotal();
  }

  finalizarCompra() {
    // Lógica para finalizar a compra
    console.log('Compra finalizada!');
  }
}
