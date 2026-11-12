import { HttpClient } from "@angular/common/http";
import { Injectable, ViewChild } from "@angular/core";
import { miHospital } from "../models/hospital";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";

@Injectable()

export class miServiceHospitales{

    constructor(
        private _http: HttpClient
    ){}

    getSaludo(): string{
        return "Api de Hospitales"
    }

    async getHospitalesAsync(): Promise<miHospital[]>{
        let request = "api/Hospitales";
        let ruta = environment.apiHospitales + request;

        return firstValueFrom(
            this._http.get<miHospital[]>(ruta)
        )        
    }

    async getBuscarHospitalAsync(idHospital: number): Promise<miHospital>{
        let request = "api/Hospitales" + "/" + idHospital;
        let ruta = environment.apiHospitales + request;

        return firstValueFrom(
            this._http.get<miHospital>(ruta)
        )        
    }

}