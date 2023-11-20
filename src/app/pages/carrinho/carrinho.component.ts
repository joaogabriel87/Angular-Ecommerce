import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  ngOnInit() {
    console.log('CarrinhoComponent foi inicializado.');
    // Qualquer outra lógica de inicialização pode ser adicionada aqui
  }
}