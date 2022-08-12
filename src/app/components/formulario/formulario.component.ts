import { UserData } from './../../models/contato';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  dataSource: MatTableDataSource<UserData> = new MatTableDataSource<UserData>();
  public contatoForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder){
    this.contatoForm = this._formBuilder.group({
      nome: new FormControl('',[
        Validators.required,
        Validators.minLength(1),
        Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
      telefone: new FormControl('',[
        Validators.required,
      Validators.pattern(/^[1-9]{2}(?:[2-8]|9[1-9])[0-9]{3}[0-9]{4}$/)]),
    });
  }

  ngOnInit(): void {
  }
  addData() {
    // const randomElementIndex = Math.floor(Math.random() * this.dataSource.data.length);
    // this.dataSource.data.push();
    console.log("aaaaaaaaaaa")
  }
}
