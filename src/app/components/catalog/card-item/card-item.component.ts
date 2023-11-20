import { Component, Input } from '@angular/core';
import { CarrinhoServiceService } from 'src/app/services/carrinho-service.service';


@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent {
@Input()
photoCardItem:string=""
@Input()
titleCardItem:string=""
@Input()
descriptCardItem:string=""
@Input()
priceCardItem:string=""

constructor(private carrinhoService: CarrinhoServiceService){}

adicionarAoCarrinho() {
  const item = {
    photo: this.photoCardItem,
    title: this.titleCardItem,
    description: this.descriptCardItem,
    price: this.priceCardItem,
  };

  this.carrinhoService.adicionarAoCarrinho(item);
}
}

