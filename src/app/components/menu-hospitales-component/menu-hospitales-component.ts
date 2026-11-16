import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { miServiceHospitales } from '../../services/service.hospitales';
import { miHospital } from '../../models/hospital';

@Component({
  selector: 'app-menu-hospitales-component',
  standalone: false,
  styleUrl: './menu-hospitales-component.css',
  templateUrl: './menu-hospitales-component.html',
})
export class MenuHospitalesComponent implements OnInit {

  arrayHospitales: miHospital[];

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: miServiceHospitales
  ){
    this.arrayHospitales = [];
  }

  async ngOnInit(): Promise<void> {
    this.arrayHospitales = await this._service.getHospitalesAsync();
    console.log(this.arrayHospitales);
    this._cdr.detectChanges();
  }
}
