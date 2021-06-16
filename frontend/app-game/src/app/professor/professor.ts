import { Escola } from "../escola/escola";

export class Professor{
    id:number;
    nome:string;
    tipo:TipoProfessor;
    login:string;
    senha:string;
    escola:Escola;
}

const enum TipoProfessor{
    Diretor = 1,
	Professor = 2
}