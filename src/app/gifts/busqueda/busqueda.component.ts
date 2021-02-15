import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GiftsService } from '../services/gifts.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {

  constructor(private gifser:GiftsService) { }

  @ViewChild('txtBuscar') txtBuscar!:ElementRef;


  ngOnInit(): void {
  }
  buscar(){
 
    const valor = this.txtBuscar.nativeElement.value;
    this.gifser.buscarGifts(valor);
    
    this.txtBuscar.nativeElement.value="";
  }
}
