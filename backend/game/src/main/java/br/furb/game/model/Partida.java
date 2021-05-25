package br.furb.game.model;

import java.sql.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "partida")
public class Partida {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	private List<Questao> questoes;
	
	private Date dataCriacao;
	
	private Professor criador;
	
	private Integer qntJogada;
	
}