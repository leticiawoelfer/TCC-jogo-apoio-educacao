import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ServicoPrestado } from '../app/servico-prestado/servico-prestado';
import { servicoPrestadoBusca } from '../app/servico-prestado/servico-prestado-lista/servicoPrestadoBusca';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  constructor(private http: HttpClient) { }

  apiUrl: string = environment.apiUrlBase + 'api/servicos-prestados';

  salvar(servicoPrestado: ServicoPrestado) : Observable<ServicoPrestado>{
    return this.http.post<ServicoPrestado>(this.apiUrl, servicoPrestado);
  }

  buscar(nome:string,mes:number):Observable<servicoPrestadoBusca[]>{

    const httpParams = new HttpParams().set("nome",nome).set("mes",mes ? mes.toString(): '');
    const url = this.apiUrl + "?" + httpParams.toString();
    console.log(url);
    return this.http.get<any>(url);
  }

}
