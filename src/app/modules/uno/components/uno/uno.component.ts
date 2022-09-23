import { Component, OnInit } from '@angular/core';
import { CompartidoService } from 'src/app/services/compartido.service';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit {

  constructor(private compartidoService: CompartidoService) { }

  ngOnInit(): void {
    this.fillform();
  }
  
  /* saludar(): void{
    console.log('Hola');
    this.compartidoService.name = "persona1";
    this.compartidoService.email = "correo@correo.com";
  } */

  public fillform(){
    let button = document.getElementById('btn');
    button?.addEventListener("click", () => {
      console.log('Hola2');
      this.compartidoService.name = "Dany";
      this.compartidoService.email = "correo@correo.com";
    })
  }
}
