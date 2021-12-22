import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  personas: Persona[] = []
  nuevo: Persona = new Persona();
  edit: boolean = false;

  constructor(
    public http: HttpClient
  ) {
    this.Lista();
  }

  Lista() {
    let url = "https://localhost:44363/";
    let ruta = "api/persona/lista";

    this.http.get(url + ruta)
      .subscribe((data) => {
        this.personas = <Persona[]>data;
      })
  }

  Delete(persona:Persona) {
    let url = "https://localhost:44363/";
    let ruta = "api/persona/delete/"+persona.cedula;

    this.http.delete(url + ruta)
      .subscribe((data) => {
        alert(data)
        this.Lista();
      })
  }

  Ingresar() {
    if (this.edit) {
      let url = "https://localhost:44363/";
      let ruta = "api/persona/actualizar";
      this.http.put(url + ruta, this.nuevo)
        .subscribe((data) => {
          alert(data)
          this.edit = false;
          this.nuevo = new Persona();
          this.Lista();
        })
    } else {
      let url = "https://localhost:44363/";
      let ruta = "api/persona/ingresar";
      this.http.post(url + ruta, this.nuevo)
        .subscribe((data) => {
          alert(data)
          this.nuevo = new Persona();
          this.Lista();
        })
    }
  }

  Cargar(persona: Persona) {
    this.edit = true;
    this.nuevo = persona;
  }

}
