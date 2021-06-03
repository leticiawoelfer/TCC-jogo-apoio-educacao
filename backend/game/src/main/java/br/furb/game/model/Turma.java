package br.furb.game.model;

import java.util.ArrayList;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Table(name = "turma")
@Entity
public class Turma {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	private String codigo;
	
	@ManyToOne
	@JoinColumn(name = "idEscola")
	private Escola escola;
	
//	@ManyToOne
//	@JoinColumn(name = "idProfessorRegente")
//	private Professor professorRegente;
	
//	@OneToMany(mappedBy = "turma")
//	private ArrayList<Aluno> alunos;
	

	
	
	//aqui vai ter idEscola
	//idProfessor (dono da turma)

}
