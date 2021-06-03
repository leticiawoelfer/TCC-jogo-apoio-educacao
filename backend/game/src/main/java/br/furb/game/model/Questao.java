package br.furb.game.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "questao")
public class Questao {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	private String titulo;
	
	@OneToMany(mappedBy = "questao")
	private List<Alternativa> alternativas;
	
	private Materia materia;
	
	@ManyToMany(mappedBy = "questoes")
	private List<Partida> partidas;
}
