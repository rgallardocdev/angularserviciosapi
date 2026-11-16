import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { miCoche } from "../models/coche";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";

@Injectable()

export class miServiceCoches{

    constructor(
        private _http: HttpClient
    ){}

    getSaludo(): string{
        return "APi de Coches"
    }

    async getCochesAsync(): Promise<miCoche[]>{
        let request = "/api/Coches";
        let ruta = environment.apiCoches + request;
        const response = await firstValueFrom(this._http.get<any>(ruta));
        console.log(response);
        return response;
    }

    async getCocheMarcaAsync(marca:string): Promise<miCoche[]>{
        let request = "/api/Coches/BuscarCoches/" + marca;
        let ruta = environment.apiCoches + request;
        let response = await firstValueFrom(this._http.get<miCoche[]>(ruta));
        console.log(response);
        return response;
    }

    async getCocheIDAsync(ID:number): Promise<miCoche>{
        let request = "/api/coches/findcoche/" + ID;
        let ruta = environment.apiCoches + request;
        let response = await firstValueFrom(this._http.get<miCoche>(ruta));
        return response;
    }
}