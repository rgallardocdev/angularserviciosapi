import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { miServiceHospitales } from '../../services/service.hospitales';
import { ActivatedRoute, Params } from '@angular/router';
import { miHospital } from '../../models/hospital';

@Component({
  selector: 'app-detalle-hospital-component',
  standalone: false,
  styleUrl: './detalle-hospital-component.css',
  templateUrl: './detalle-hospital-component.html',
})
export class DetalleHospitalComponent implements OnInit {

  _hospitalParametro!: miHospital;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: miServiceHospitales,
    private _active: ActivatedRoute
  ){}

  async ngOnInit(): Promise<void> {
    this._active.params.subscribe(async (params: Params) => {
      let _idHospital = params['idhospital'];
      this._hospitalParametro = await this._service.getBuscarHospitalAsync(_idHospital);
      this._cdr.detectChanges();
    });    
  }

}
