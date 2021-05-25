package br.furb.game.model;

import java.util.ArrayList;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Table(name = "turma")
@Entity
public class Turma {
	
	private Integer id;
	private String codigo;
	
	@OneToOne
	@JoinColumn(name = "idEscola")
	private Escola escola;
	
	@ManyToOne
	@JoinColumn(name = "idProfessor")
	private Professor professor;	
	
	@OneToMany(mappedBy = "turma")
	private ArrayList<Aluno> alunos;
	
	
	//aqui vai ter idEscola
	//idProfessor (dono da turma)

}
