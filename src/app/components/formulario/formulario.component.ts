import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';

import { Contato } from 'src/app/models/contato';

const listaContatosInicial = [
  {
    codigo: "1",
    nome: "Victor",
    telefone: "21973068947"
  },
  {
    codigo: "2",
    nome: "Antônio",
    telefone: "21973068948"
  },
  {
    codigo: "3",
    nome: "Maria",
    telefone: "21973068949"
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

    this.listaContatos.data = listaContatosInicial

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
    return this.contatoForm.status == "VALID" ? true : false
  }

  salvarContato(): void{
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

      this.contatoForm.reset();
    }
    else
      this._toastr.error("Verifique o preenchimento dos campos e tente novamente!","Campos inválidos")
  }

}
