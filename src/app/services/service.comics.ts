import { Injectable } from "@angular/core";
import { miComic } from "../models/comic";

@Injectable()
export class miServiceComics{
    
    getSaludo(): string{
        return "Hola que tal";
    }

    getComic(): miComic{
        let _comic = new miComic("Mortadelo y Filemon","https://i.pinimg.com/originals/a4/1f/3f/a41f3fbc396ba1d5590fdf0b9046811c.jpg","Agentes de la TIA");
        return _comic;
    }

    async getListadoComicsAsync(): Promise<miComic[]> {
        let ruta = "documentos/comics.json";
        let respuesta = await fetch(ruta);
        let datos = await respuesta.json();

        let arrayComics: miComic[] = [];

        for (let tebeo of datos){
            let _comic = new miComic(tebeo.titulo,tebeo.imagen,tebeo.descripcion);
            arrayComics.push(_comic);
        }
        console.log(arrayComics);
        return arrayComics;
    }

}