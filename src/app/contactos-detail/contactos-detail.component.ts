import { Component, OnInit } from '@angular/core';
import { ContactosService } from '../Services/contactos.service';
import { ActivatedRoute } from '@angular/router';
import { Contacto } from '../Interfaces/contacto';

@Component({
  selector: 'app-contactos-detail',
  templateUrl: './contactos-detail.component.html',
  styleUrls: ['./contactos-detail.component.css'],
})
export class ContactosDetailComponent implements OnInit {
  //Creamos una instancia del servicio y otra de ActivatedRoute
  constructor(
    private comService: ContactosService,
    private ruta: ActivatedRoute
  ) {}

  listContactos?: Contacto;

  //Obtenemos el detalle de los contactos
  getContactos() {
      this.ruta.paramMap.subscribe((parametros) =>{
        let id = Number(parametros.get('id'));
        this.comService.getContactoDetail(id).subscribe((resp:any) =>{
          this.listContactos = resp.data;
        });
      });
  }

  ngOnInit(): void {
    this.getContactos();
  }
}
