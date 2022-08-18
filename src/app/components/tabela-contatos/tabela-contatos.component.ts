import { ListaContatoService } from 'src/app/shared/services/lista-contato.service';
import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

import { Contato } from 'src/app/shared/models/contato';


@Component({
  selector: 'app-tabela-contatos',
  templateUrl: './tabela-contatos.component.html',
  styleUrls: ['./tabela-contatos.component.css']
})

export class TabelaContatosComponent implements AfterViewInit {

  @Input() listaContatos: MatTableDataSource<Contato> = new MatTableDataSource<Contato>();
  @ViewChild(MatSort) sort: MatSort= new MatSort();

  displayedColumns: string[] = ['codigo', 'nome', 'telefone', 'remover'];

  constructor(private _listaContatoService: ListaContatoService) {  }

  ngAfterViewInit() {
    this.listaContatos.sort = this.sort;
  }

  filtrarContatos(event: Event) {
    const valorFiltro = (event.target as HTMLInputElement).value;
    this.listaContatos.filter = valorFiltro.trim().toLowerCase();
  }

  excluirContato(codigo: any) {
  //   this.listaContatos.data.forEach((element: any,index)=>{
  //     if(element.codigo == codigo)
  //     this.listaContatos.data.splice(index,1);
  //  });
debugger
   this._listaContatoService.apagarContato(codigo)

  //   this.listaContatos.data = (this.listaContatos.data != undefined) ?
  //                             Object.assign(this.listaContatos.data) :
  //                             Object.assign([]);
  }
}
