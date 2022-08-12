import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { UserData } from 'src/app/models/contato';





@Component({
  selector: 'app-tabela-contatos',
  templateUrl: './tabela-contatos.component.html',
  styleUrls: ['./tabela-contatos.component.css']
})

export class TabelaContatosComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  @Input() dataSource: MatTableDataSource<UserData>;


  @ViewChild(MatSort) sort: MatSort= new MatSort();

  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => new UserData().createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {

    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


removeData() {
  this.dataSource.data.pop();

}


}
