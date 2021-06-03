package br.furb.game.model;


import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "professor")
public class Professor {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private Integer id;
	
	private String nome;
	
	private TipoProfessor tipo;
	
	private String login;
	
	private String senha;
	
	@ManyToOne
	@OneToOne(mappedBy = "diretor")
	@JoinColumn(name = "idEscola")
	private Escola escola;
	
	
	//um professor para muitas turmas
	//@OneToMany(mappedBy = "professor")
	//private List<Turma> turmas;
	
	//não precisa da manyToMany para professor e escola, o que vai ligar eles vai ser a turma

}
