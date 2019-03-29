import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form){
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent implements OnInit {

  usuario:Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: "",
    sexo: "Hombre",
    acepta: false
  }

  sexos:string[] = ["Hombre", "Mujer"]

  paises = [{
    codigo: "CRI",
    nombre: "Costa Rica"
  },
  {
    codigo: "ESP",
    nombre: "España"
  },
  {
    codigo: "PER",
    nombre: "Perú"
  }]

  constructor() { }

  ngOnInit() {
  }

  guardar(forma:NgForm){
    console.log("ngForm: ", forma);
    console.log("Valor forma: ", forma.value);
    console.log("Usuario", this.usuario);

    forma.reset();
  }

}
