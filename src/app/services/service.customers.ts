import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { miCustomer } from "../models/customer";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";
import { miHospital } from "../models/hospital";

@Injectable()
export class miServiceCustomers{

    constructor(
        private _http: HttpClient
    ){}

    getSaludo(): string{
        return "Servicio API de Customers";
    }

    async getCustomersAsync(): Promise<miCustomer[]>{
        let request = "Customers";
        let ruta = environment.apiCustomers + request;

        // esta opcion es cuando vienen los campos directamente en la respuesta de la API
        // return firstValueFrom(this._http.get<miHospital>(ruta))            

        //en el caso de customers es distinto.
        //esta opcion es cuando tenemos el caso en la respuesta de la API que este con KEY (en este caso "value")
        const response = await firstValueFrom(this._http.get<any>(ruta));
        return response.value;
        //Es decir, asi:
            // "value": [
            //     {
            //     "CustomerID": "ALFKI",
            //     "CompanyName": "Alfreds Futterkiste",
            //     "ContactName": "Maria Anders",
            //     "ContactTitle": "Sales Representative",
            //     "Address": "Obere Str. 57",
            //     "City": "Berlin",
            //     "Region": null,
            //     "PostalCode": "12209",
            //     "Country": "Germany",
            //     "Phone": "030-0074321",
            //     "Fax": "030-0076545"
            //     },
            //     {
            //     "CustomerID": "ANATR",
            //     "CompanyName": "Ana Trujillo Emparedados y helados",
            //     "ContactName": "Ana Trujillo",
            //     "ContactTitle": "Owner",
            //     "Address": "Avda. de la Constitución 2222",
            //     "City": "México D.F.",
            //     "Region": null,
            //     "PostalCode": "05021",
            //     "Country": "Mexico",
            //     "Phone": "(5) 555-4729",
            //     "Fax": "(5) 555-3745"
            //     },        
        
    }

}