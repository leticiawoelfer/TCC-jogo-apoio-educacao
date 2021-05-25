package br.furb.game.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "aluno")
public class Aluno {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	private String nome;
	
	@ManyToOne //aqui tem o join colunm porque é aqui que vai ter a FK da Turma
	@JoinColumn(name = "idTurma")
	
	private Turma turma;//idTurma - o Aluno só vai estar em uma turma
	
	private Date dataNasc;
}
