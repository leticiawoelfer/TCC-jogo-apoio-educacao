package br.furb.game.model;

import java.sql.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name = "partida")
public class Partida {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	@ManyToMany
	@JoinTable(name = "partidaQuestao",
			joinColumns = @JoinColumn(name = "idPartida"),
			inverseJoinColumns = @JoinColumn(name = "idQuestao"))
	private List<Questao> questoes;
	
	private Date dataCriacao;
	
	private Professor criador;
	
	private Integer qntJogada;
	
	private Materia materia;
	
	@ManyToOne
	@JoinColumn(name = "idProfessor")//nome da FK
	private Professor professor;
	

	
}
