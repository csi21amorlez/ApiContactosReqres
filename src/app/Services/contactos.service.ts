import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contacto } from '../Interfaces/contacto';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  constructor(private http: HttpClient) { }

  //Metodo que obtiene los contactos
  getAllContactos(){
    console.log('Contactos obtenidos correctamente');
    return this.http.get<any>('https://reqres.in/api/users');
  }
  //Metodo que obtiene el detalle de un contacto según su id
  getContactoDetail(id:number){
    console.log('Detalle del contacto obtenido');
    //Optenemos los valores del contacto mediante get, por lo que se verá en la url
    return this.http.get<any>('https://reqres.in/api/users/${id}');
  }
  //Metodo para crear contactos en la API
  createContacto(contacto:Contacto){
    console.log('Contacto creado correctamente');
    //Utilizamos la funcion post para poder encriptar las credenciales del contacto
    return this.http.post<Contacto>('https://reqres.in/api/users', contacto);
  }
  //Metodo para eliminar un usuario
  deleteContactos(id:number) : Observable<any>{
    console.log('Contacto eliminado correctamente');
    //Utilizamos la funcion delete del http para eliminar el contacto
    return this.http.delete<Contacto>('https://reqres.in/api/users/${id}' )
  }
  //Metodo para actualizar un contacto
  updateContacto(contacto:Contacto, id:number):Observable<any>{
    return this.http.put<Contacto>(
      //Parametros para modificar los contactos
      'https://reqres.in/api/users/${id}',
      contacto
    );
  }

}
