import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { miCoche } from '../../models/coche';
import { miServiceCoches } from '../../services/service.coches';

@Component({
  selector: 'app-detalle-coche-component',
  standalone: false,
  styleUrl: './detalle-coche-component.css',
  templateUrl: './detalle-coche-component.html',
})
export class DetalleCocheComponent implements OnInit {

  mensajeSaludo!: string;

  _cocheParametro!: miCoche;

  constructor(
    private _active: ActivatedRoute,
    private _cdr: ChangeDetectorRef,
    private _service: miServiceCoches
  ){}

  async ngOnInit(): Promise<void> {
    this._active.params.subscribe(async (params: Params) => {
      let _idcoche = params['idcoche'];
      this.mensajeSaludo = "la clave recibida es: " + _idcoche;
      this._cocheParametro = await this._service.getCocheIDAsync(_idcoche);
      this._cdr.detectChanges();
    });
  }
}
