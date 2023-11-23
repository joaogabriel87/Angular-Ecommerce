import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarrinhoComponent } from './carrinho.component';
import { CarrinhoServiceService } from 'src/app/services/carrinho-service.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('CarrinhoComponent', () => {
  let component: CarrinhoComponent;
  let fixture: ComponentFixture<CarrinhoComponent>;
  let carrinhoService: CarrinhoServiceService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrinhoComponent],
      imports: [RouterTestingModule], // Adiciona RouterTestingModule para espiar o Router
      providers: [CarrinhoServiceService]
    });
    
    fixture = TestBed.createComponent(CarrinhoComponent);
    component = fixture.componentInstance;
    carrinhoService = TestBed.inject(CarrinhoServiceService);
    router = TestBed.inject(Router); // Injeta o Router do TestBed

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove item from carrinho', () => {
    const mockItem = { title: 'Mock Item', quantity: 2 };
    
    // Adiciona um item ao carrinho
    carrinhoService.adicionarAoCarrinho(mockItem);
    component.removerDoCarrinho(mockItem);

    // Verifica se o item foi removido
    expect(component.itensNoCarrinho.length).toEqual(0);
  });

  it('should navigate to /checkout on finalizarCompra()', () => {
    spyOn(router, 'navigate'); // Espia o método navigate do Router

    component.finalizarCompra();

    // Verifica se o método navigate foi chamado com o argumento correto
    expect(router.navigate).toHaveBeenCalledWith(['/checkout']);
  });

  it('should calculate correct total price', () => {
    const mockItem1 = { title: 'Item 1', price: '10', quantity: 2 };
    const mockItem2 = { title: 'Item 2', price: '5', quantity: 3 };
  
    // Adiciona itens ao carrinho
    carrinhoService.adicionarAoCarrinho(mockItem1);
    carrinhoService.adicionarAoCarrinho(mockItem2);
  
    const totalPrice = component.calcularPrecoTotal();
  
    console.log('Itens no Carrinho:', component.itensNoCarrinho);
    console.log('Total Price:', totalPrice);
  
    // Verifica se o cálculo do preço total está correto
    expect(totalPrice).toEqual(35);
  });
  
});
