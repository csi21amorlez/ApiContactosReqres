import { Component, OnInit } from '@angular/core';
import { ContactosService } from '../Services/contactos.service';
import { Contacto } from '../Interfaces/contacto';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  //Creamos una instancia privada del servicio de contactos
  constructor(private comService : ContactosService) { }

  //Creamos un array vacio para guardar los contactos
  listContactos: Contacto[] = [];

  //Obtenemos los contactos de la api
  getContactos() {
    this.comService.getAllContactos().subscribe((resp) => {
      console.log(resp);
      //Añadimos los contactos a la lista 1 a 1
      resp.data.forEach((element: Contacto) => {
        this.listContactos.push(element);
      });
    });
  }

  ngOnInit(): void {
    //Ejecutamos el metodo nada mas iniciar el componente
    this.getContactos();
  }

}
