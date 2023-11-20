import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoServiceService {

  itens: any[] = [];

  adicionarAoCarrinho(item: any) {
    const itemExistente = this.itens.find(i => i.title === item.title);

    if (itemExistente) {
      // Se o item já existe, aumenta a quantidade
      itemExistente.quantity += 1;
    } else {
      // Se o item não existe, adiciona ao carrinho
      item.quantity = 1;
      this.itens.push(item);
    }
  }

  removerDoCarrinho(item: any) {
    const index = this.itens.indexOf(item);

    if (index !== -1) {
      // Se o item existe, reduz a quantidade ou remove do carrinho
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        this.itens.splice(index, 1);
      }
    }
  }

  obterItensNoCarrinho() {
    return this.itens;
  }

  calcularPrecoTotal(): number {
    let totalPrice = 0;
  
    for (const item of this.itens) {
      totalPrice += item.price * item.quantity;
    }
  
    return totalPrice;
  }
}