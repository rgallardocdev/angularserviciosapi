import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { miPersona } from "../models/persona";
import { firstValueFrom } from "rxjs";
import { Global } from "../global";
import { environment } from "../../environments/environment.development";

@Injectable()

export class miServicePersonas{
    constructor(
        private _http: HttpClient
    ){}

    getSaludo(): string{
        return "Servicios API";
    }

    async getPersonasAsync(): Promise<miPersona[]>{
        let request =  "api/personas"
        let ruta = environment.apiPersonas + request; // Global.apiPersonas + request;

        return firstValueFrom(
            this._http.get<miPersona[]>(ruta)
        )
    }

    async getBuscarPersonaAsync(idPersona: number): Promise<miPersona>{
        let request = "api/personas" + "/" + idPersona;
        let ruta = environment.apiPersonas + request; // Global.apiPersonas + request;

        return firstValueFrom(
            this._http.get<miPersona>(ruta)
        )
    }
}