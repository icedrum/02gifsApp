import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GiftsService {


  private Api="5VWWCnOta9fEtkXNqSSLTGQR9X03MKbb";

  private _historial: string[]=[];
  get historial():string[]{
    return [...this._historial]
  }


  buscarGifts(query: string=''){

    query=query.trim().toLocaleLowerCase();

    if (query.length ===0) {return}

    if (!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial=this._historial.splice(0,9);

    }


    console.log(this._historial);
    
  }

  constructor() { }
}
