import { Component, OnInit } from '@angular/core';
import { GiftsService } from '../services/gifts.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent implements OnInit {

  constructor(private gifs: GiftsService) { } 

  get resultados(){
    return this.gifs.resultados;
  }



  ngOnInit(): void {
  }

}
