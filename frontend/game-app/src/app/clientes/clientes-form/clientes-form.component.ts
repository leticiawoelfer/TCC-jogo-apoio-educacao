import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.scss']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  success: boolean = false;
  errors: String[];
  id: number;

  constructor(
    private service: ClientesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params && params.id) {
        this.service.getClienteById(params.id).subscribe(response => {
          this.cliente = response,
            this.id = params.id,
            errorResponse => this.cliente = new Cliente();
        });
      }
    });

  }

  onSubmit() {
    if (this.id) {
      this.service
      .atualizar(this.cliente)
      .subscribe(response => {
        this.success = true;
        this.errors = null;
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse;
      }
      );
 

      
    } else {
      this.service
        .salvar(this.cliente)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.cliente = response;
        }, errorResponse => {
          this.success = false;
          this.errors = errorResponse.error.erros;
        }
        );
    }
  }

  voltarParaListagem() {
    this.router.navigate(['/clientes-list']);
  }
}

