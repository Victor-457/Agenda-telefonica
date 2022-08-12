import { LiveAnnouncer } from '@angular/cdk/a11y';
import {AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Contato } from 'src/app/models/contato';





@Component({
  selector: 'app-tabela-contatos',
  templateUrl: './tabela-contatos.component.html',
  styleUrls: ['./tabela-contatos.component.css']
})

export class TabelaContatosComponent implements AfterViewInit, OnChanges {
  displayedColumns: string[] = ['codigo', 'nome', 'telefone', 'remover'];
  @Input() listaContatos: MatTableDataSource<Contato> = new MatTableDataSource<Contato>();


  @ViewChild(MatSort) sort: MatSort= new MatSort();

  constructor(private _changeDetector: ChangeDetectorRef,
    private _liveAnnouncer: LiveAnnouncer) {

  }

  ngOnChanges(changes: SimpleChanges) {
    this.listaContatos.data = (this.listaContatos.data != undefined) ?
    Object.assign(this.listaContatos.data) :
    Object.assign([]);
  }

  ngAfterViewInit() {
    this.listaContatos.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.listaContatos.filter = filterValue.trim().toLowerCase();
  }


  removeData(codigo: any) {
    this.listaContatos.data.forEach((element: any,index)=>{
      if(element.codigo == codigo)
      this.listaContatos.data.splice(index,1);
   });

    this.listaContatos.data = (this.listaContatos.data != undefined) ?
                              Object.assign(this.listaContatos.data) :
                              Object.assign([]);

  }
  announceSortChange(sortState: Sort) {

    if (sortState.direction == 'asc') {
      this.listaContatos.data.sort()
      this.listaContatos.data = (this.listaContatos.data != undefined) ?
                              Object.assign(this.listaContatos.data) :
                              Object.assign([]);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
