import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  checkoutForm: FormGroup;
formaPagamento: any;

  constructor(private router: Router, private fb: FormBuilder) {
    this.checkoutForm = this.fb.group({
      nomeCompleto: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      tipoPagamento: ['', Validators.required],
    });
  }

  finalizarCompra() {
      this.router.navigate(['/home']);
    }
  }
 
