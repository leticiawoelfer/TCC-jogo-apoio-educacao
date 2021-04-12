import { ConfigService } from "../config/config.service";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { map } from 'rxjs/operators';
import { PessoaEntity } from "./pessoaEntity";
import { Injectable } from '@angular/core';

@Injectable()
export class PessoaEntityService{

    private baseUrlService:string = "";
    private headers:Headers;
    private options:RequestOptions;

    constructor(private http:Http, private configService: ConfigService){

        /*SETANDO A URL DO SERVIÇO REST QUE VAI SER ACESSADO */
        this.baseUrlService = configService.getUrlService() + '/pessoa/';

         /*ADICIONANDO O JSON NO HEADER */
         this.headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });               
         this.options = new RequestOptions({headers : this.headers });
    }

     /*Consulta registros cadastrados */
     getPessoas(){        
        return this.http.get(this.baseUrlService).pipe(map((res => res.json())));
    }

    /*adiciona um novo registro */
    addPessoa(pessoa: PessoaEntity){
        return this.http.post(this.baseUrlService, JSON.stringify(pessoa),this.options).pipe(map(res => res.json())); 
    
    }
    /*Exclui registro */
    excluirPessoa(codigo:number){
        return this.http.delete(this.baseUrlService + codigo).pipe(map(res => res.json()));
    }
 
    /*Consulta registro pelo código ( pes_id )*/
    getPessoa(codigo:number){
 
        return this.http.get(this.baseUrlService + codigo).pipe(map(res => res.json()));
    }
 
    /*atualiza registro*/
    atualizarPessoa(pessoa:PessoaEntity){
        return this.http.put(this.baseUrlService, JSON.stringify(pessoa),this.options).pipe(map(res => res.json()));
    }
}