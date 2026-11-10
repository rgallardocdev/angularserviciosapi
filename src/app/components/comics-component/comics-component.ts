import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { miServiceComics } from '../../services/service.comics';
import { miComic } from '../../models/comic';

@Component({
  selector: 'app-comics-component',
  standalone: false,
  styleUrl: './comics-component.css',
  templateUrl: './comics-component.html',
})
export class ComicsComponent implements OnInit {

  mensaje!: string;

  _comic!: miComic;

  arrayComics: miComic[];

  constructor(
    private _serviceComics: miServiceComics,
    private _cdr: ChangeDetectorRef

  ) {
    this.arrayComics = [];
   }

  async ngOnInit(): Promise<void> {

    this.mensaje = this._serviceComics.getSaludo();
    
    this._comic = this._serviceComics.getComic();

    this.arrayComics = await this._serviceComics.getListadoComicsAsync();

    this._cdr.detectChanges();
  }
}
