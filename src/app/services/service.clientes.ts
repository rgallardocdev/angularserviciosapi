import { Injectable } from "@angular/core";
import { miCliente } from "../models/cliente";

@Injectable()

export class miServiceClientes{

    arrayClientes: miCliente[];

    constructor(){
        this.arrayClientes = [];
    }

    getSaludo(): string {
        return "Bienvenido a la página de Clientes";
    }

    async getClientesAsync(): Promise<miCliente[]> {
        let ruta = "documentos/clientesdatos.json";
        let respuesta = await fetch(ruta);
        let datos = await respuesta.json();

        for (let cliente of datos){
            let _cliente = new miCliente(parseInt(cliente.idcliente), cliente.nombre, cliente.paginaweb, cliente.imagencliente);
            this.arrayClientes.push(_cliente);
        }
        return this.arrayClientes;
    }

}