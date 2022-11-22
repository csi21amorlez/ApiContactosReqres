//Interfaz con la que definimos los atributos de los objetos que vamos a obtener de la api
export interface Contacto {

  id: number;
  first_name: string;
  last_name: string;
  email: string;
  //Image
  avatar: string;
}
