import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { miServiceCustomers } from '../../services/service.customers';
import { miCustomer } from '../../models/customer';

@Component({
  selector: 'app-customers-api-component',
  standalone: false,
  styleUrl: './customers-api-component.css',
  templateUrl: './customers-api-component.html',
})
export class CustomersApiComponent implements OnInit {

  mensajeSaludo!: string;

  arrayCustomers: miCustomer[];

  constructor(
    private _service: miServiceCustomers,
    private _cdr: ChangeDetectorRef
  ){
    this.arrayCustomers = [];
  }

  async ngOnInit(): Promise<void> {
    this.mensajeSaludo = this._service.getSaludo();
    this.arrayCustomers = await this._service.getCustomersAsync();

    console.log(this.arrayCustomers);

    this._cdr.detectChanges();
  }

}
