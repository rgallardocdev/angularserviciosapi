import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { miServiceClientes } from '../../services/service.clientes';
import { miCliente } from '../../models/cliente';

@Component({
  selector: 'app-clientes-component',
  standalone: false,
  styleUrl: './clientes-component.css',
  templateUrl: './clientes-component.html',
})
export class ClientesComponent implements OnInit {

  mensaje!: string;
  arrayClientes: miCliente[];

  constructor(
    private _serviceClientes: miServiceClientes,
    private _cdr: ChangeDetectorRef
  ){
    this.arrayClientes = [];
  }

  async ngOnInit(): Promise<void> {
    this.mensaje = this._serviceClientes.getSaludo();

    this.arrayClientes = await this._serviceClientes.getClientesAsync();

    this._cdr.detectChanges();
  }
}
