import { TestBed } from '@angular/core/testing';

import { CarrinhoServiceService } from './carrinho-service.service';

describe('CarrinhoServiceService', () => {
  let service: CarrinhoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
       providers: [CarrinhoServiceService]
    });
    service = TestBed.inject(CarrinhoServiceService);
  });

  beforeEach(() => {
    service.itens = []; 
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add item to cart', () => {
    const item = {
      title: 'Product 1',
      price: 20.0,
      quantity: 1,
    };

    service.adicionarAoCarrinho(item);

    const itensNoCarrinho = service.obterItensNoCarrinho();
    expect(itensNoCarrinho.length).toEqual(1);
    expect(itensNoCarrinho[0].title).toEqual('Product 1');
  });

  it('should remove item from cart', () => {
    const item = {
      title: 'Product 2',
      price: 25.0,
      quantity: 2,
    };

    service.adicionarAoCarrinho(item);

    let itensNoCarrinho = service.obterItensNoCarrinho();
    expect(itensNoCarrinho.length).toEqual(1);

    service.removerDoCarrinho(item);

    itensNoCarrinho = service.obterItensNoCarrinho();
    expect(itensNoCarrinho.length).toEqual(0);
  });

  it('should calculate total price', () => {
    const itensNoCarrinho = [
      { title: 'Product 3', price: 30.0, quantity: 2 },
      { title: 'Product 4', price: 15.0, quantity: 3 },
    ];
  
    // Adiciona os itens ao carrinho
    for (const item of itensNoCarrinho) {
      service.adicionarAoCarrinho(item);
    }
  
    // Calcula o preço total
    const totalPrice = service.calcularPrecoTotal();
  
    // Valor esperado
    const expectedTotalPrice = itensNoCarrinho.reduce((total, item) => total + item.price * item.quantity, 0);
  
    // Compara o resultado
    expect(totalPrice).toEqual(expectedTotalPrice);
  });
  
});