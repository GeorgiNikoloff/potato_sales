import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'new-product-editor',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent {
  profileForm = this.fb.group({
    productName: ['', Validators.required],
    productId: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    productManager: [''],
    salesStartDate: ['']
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    console.warn(this.profileForm.value);
  }
}
