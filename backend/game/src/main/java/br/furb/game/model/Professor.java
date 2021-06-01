package br.furb.game.model;


import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "professor")
public class Professor {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private Integer id;
	
	private String nome;
	
	private String login;
	
	private String senha;
	
	private Escola escola;
	//professor tem um idEscola
	
	//um professor para muitas turmas
	@OneToMany(mappedBy = "professor")
	private List<Turma> turmas;
	
	//não precisa da manyToMany para professor e escola, o que vai ligar eles vai ser a turma

}
