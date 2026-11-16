import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { miServiceCoches } from '../../services/service.coches';
import { miCoche } from '../../models/coche';

@Component({
  selector: 'app-coches-api-component',
  standalone: false,
  styleUrl: './coches-api-component.css',
  templateUrl: './coches-api-component.html',
})
export class CochesApiComponent implements OnInit {

  mensajeSaludo!: string;

  arrayCoches: miCoche[];

  arrayCochesMarca: miCoche[];

  @ViewChild("cajamarca") _cajamarca!: ElementRef;
  @ViewChild("cajaid") _cajaid!: ElementRef;
  @ViewChild("selectid") _selectid!: ElementRef;
  _coche! : miCoche;
  _cocheID!: miCoche;
  
  constructor(
    private _service: miServiceCoches,
    private _cdr: ChangeDetectorRef
  ){
    this.arrayCoches = [];
    this.arrayCochesMarca = [];
  }

  async ngOnInit(): Promise<void> {
    this.mensajeSaludo = await this._service.getSaludo();
    this.arrayCoches = await this._service.getCochesAsync();

    this._cdr.detectChanges();
    
  }

  async buscarCocheMarca(): Promise<void>{
    let marca = this._cajamarca.nativeElement.value;
    this.arrayCochesMarca = await this._service.getCocheMarcaAsync(marca);

    this._cdr.detectChanges();
  }

  async buscarCocheID(): Promise<void>{
    let id = this._cajaid.nativeElement.value;
    this._cocheID = await this._service.getCocheIDAsync(id);

    this._cdr.detectChanges();
  }

  async buscarCocheIDSelect(): Promise<void>{
    let id = this._selectid.nativeElement.value;
    this._cocheID = await this._service.getCocheIDAsync(id);
    this._cdr.detectChanges();
  }
}
