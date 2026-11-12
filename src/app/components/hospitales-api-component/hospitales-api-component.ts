import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { miServiceHospitales } from '../../services/service.hospitales';
import { miHospital } from '../../models/hospital';

@Component({
  selector: 'app-hospitales-api-component',
  standalone: false,
  styleUrl: './hospitales-api-component.css',
  templateUrl: './hospitales-api-component.html',
})
export class HospitalesApiComponent implements OnInit {

  mensajeSaludo!: string;

  arrayHospitales: miHospital[];

  @ViewChild("cajaid") _cajaid!: ElementRef;
  _hospital!: miHospital;

  constructor(
    private _service: miServiceHospitales,
    private _cdr: ChangeDetectorRef
  ){
    this.arrayHospitales = [];
  }

  async ngOnInit(): Promise<void> {
    this.mensajeSaludo = this._service.getSaludo();
    this.arrayHospitales = await this._service.getHospitalesAsync();
    this._cdr.detectChanges();
  }

  async buscarHospital(){
    let id = parseInt(this._cajaid.nativeElement.value);
    this._hospital = await this._service.getBuscarHospitalAsync(id);
    this._cdr.detectChanges();
  }

}
