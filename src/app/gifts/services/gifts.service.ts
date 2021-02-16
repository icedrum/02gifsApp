import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GiftsService {


  private Api="5VWWCnOta9fEtkXNqSSLTGQR9X03MKbb";

  // TODO  Poner el tipado correcto
  public resultados:any[]=[] 


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

    const url: string=`http://api.giphy.com/v1/gifs/search?api_key=5VWWCnOta9fEtkXNqSSLTGQR9X03MKbb&q= ${query} &limit=10`;

    this.http.get(url).subscribe((resp:any)=>{
      console.log(resp.data);
      this.resultados=resp.data;
;    });
    //console.log(this._historial);
    
  }

  constructor(private http: HttpClient ) { }
}
