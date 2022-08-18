import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Contato } from '../models/contato';

@Injectable({
  providedIn: 'root'
})
export class ListaContatoService {

  constructor(private http: HttpClient) { }

  async recuperarListaContatos(): Promise<any>{
    return await (lastValueFrom(this.http.get("http://localhost:3000/listaContatos")));
  }

  adicionarContato(contato: Contato){
    let body={...contato}
    return lastValueFrom(this.http.post<any>("http://localhost:3000/listaContatos/", body,
    { headers: { 'Content-Type': 'application/json' } }));
  }

  async apagarContato(contato: Contato){
    let params = new HttpParams().set('',contato.id);

    return  await lastValueFrom(this.http.delete(
                    'http://localhost:3000/listaContatos/',
                    { responseType: 'text', params: params}))
    //return lastValueFrom(this.http.delete("http://localhost:3000/listaContatos/1"));
  }
}
