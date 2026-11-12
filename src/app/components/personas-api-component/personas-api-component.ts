import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { miPersona } from '../../models/persona';
import { miServicePersonas } from '../../services/service.personas';

@Component({
  selector: 'app-personas-api-component',
  standalone: false,
  styleUrl: './personas-api-component.css',
  templateUrl: './personas-api-component.html',
})
export class PersonasApiComponent implements OnInit {

  arrayPersonas: miPersona[];

  mensajeSaludo!: string;

  @ViewChild("cajaid") _cajaid!: ElementRef;
  _persona!: miPersona;

  constructor(
    private _service: miServicePersonas,
    private _cdr: ChangeDetectorRef
  ){
    this.arrayPersonas = [];
  }

  async ngOnInit(): Promise<void> {
    this.arrayPersonas = await this._service.getPersonasAsync();

    this.mensajeSaludo = this._service.getSaludo();

    this._cdr.detectChanges();
  }

  async buscarPersona(){
    let id = parseInt(this._cajaid.nativeElement.value);
    console.log(id);
    this._persona = await this._service.getBuscarPersonaAsync(id);
    this._cdr.detectChanges();
  }

}
