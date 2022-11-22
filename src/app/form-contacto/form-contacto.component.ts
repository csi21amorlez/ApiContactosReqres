import { Component, OnInit } from '@angular/core';
import { ContactosService } from '../Services/contactos.service';

@Component({
  selector: 'app-form-contacto',
  templateUrl: './form-contacto.component.html',
  styleUrls: ['./form-contacto.component.css'],
})
export class FormContactoComponent implements OnInit {
  constructor(private comService: ContactosService) {}

  ngOnInit(): void {}
}
