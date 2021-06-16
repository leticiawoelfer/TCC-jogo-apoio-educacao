import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EscolaService } from 'src/services/escola.service';
import { Escola } from '../escola';

@Component({
  selector: 'app-escola-list',
  templateUrl: './escola-list.component.html',
  styleUrls: ['./escola-list.component.css']
})
export class EscolaListComponent implements OnInit {

  escolas: Escola[] = [];
  escolaSelecionada: Escola;
  mensagemErro: string;
  mensagemSucesso: string;

  constructor(private service: EscolaService, private router: Router) { }

  ngOnInit(): void {
    this.service.getEscolas().subscribe(resposta => this.escolas = resposta);
  }

  novoCadastro() {
    this.router.navigate(['/escola-form']);
  }

  selecionaEscola(escola: Escola) {
    this.escolaSelecionada = escola;
  }

  deletarEscola() {
    console.log(this.escolaSelecionada)
    this.service.delete(this.escolaSelecionada).subscribe(
      response => {
        this.mensagemSucesso = 'Cliente deletado com sucesso',
        this.ngOnInit();
      },
      erro => this.mensagemErro = 'Ocorreu um erro ao deletar o cliente');
  }

}
