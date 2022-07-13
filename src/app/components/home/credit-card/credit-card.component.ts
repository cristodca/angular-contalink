import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreditCard } from 'src/app/models/credit-card';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {
  cardForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(10)]),
    number: new FormControl(123),
    expiration: new FormControl(),
    cvv: new FormControl(),
  })

  constructor() { }

  ngOnInit(): void {
    // this.cardForm.valueChanges.subscribe(value => {
    //   console.log(value)
    // })
    // this.cardForm.get('cvv')?.valueChanges.subscribe(value => {
    //   console.log(value)
    // })
  }

  checkout() {
    console.log(this.cardForm.status)

    let creditCard: CreditCard = this.cardForm.value
    console.log(creditCard)
    this.cardForm.patchValue({
      name: 'Cristopher'
    })
    this.cardForm.get('expiration')?.setValue('07/2022')
  }

  clear() {
    this.cardForm.reset()
  }

}
