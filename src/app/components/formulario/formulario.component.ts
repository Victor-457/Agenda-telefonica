import { Contato } from 'src/app/models/contato';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


const listaContatosTeste=[
  {
    codigo: "1",
    nome: "teste 1",
    telefone: "21989852917"
  },
  {
    codigo: "2",
    nome: "teste 2",
    telefone: "21989852912"
  },
  {
    codigo: "3",
    nome: "teste 3",
    telefone: "21989852913"
  }]


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  listaContatos: MatTableDataSource<Contato> = new MatTableDataSource<Contato>();
  public contatoForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private _toastr: ToastrService){

    this.listaContatos.data = listaContatosTeste

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

  camposValidos(): boolean{
    let camposValidos = (this.contatoForm.get('nome')?.invalid && this.contatoForm.get('nome')?.touched) &&
      (this.contatoForm.get('telefone')?.invalid && this.contatoForm.get('telefone')?.touched)

    return this.contatoForm.status == "VALID" ? true : false
  }

  addData() {

    if(this.camposValidos()){
      let contatoCodigo = (this.listaContatos.data.length + 1).toString()
      let contato = { codigo: contatoCodigo,
                      nome: this.contatoForm.value.nome,
                      telefone: this.contatoForm.value.telefone
                    }

      this.listaContatos.data.push(contato)
      this.listaContatos.data = (this.listaContatos.data != undefined) ?
      Object.assign(this.listaContatos.data) :
      Object.assign([]);
    }
    else
      this._toastr.error("Verifique o preenchimento dos campos e tente novamente!","Campos inválidos")
  }

}
