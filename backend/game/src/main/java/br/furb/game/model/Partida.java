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
	
	@ManyToOne
	@JoinColumn(name = "idProfessor")//nome da FK
	private Professor professor;
	
	private Integer qntJogada;
	
	private Materia materia;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public List<Questao> getQuestoes() {
		return questoes;
	}

	public void setQuestoes(List<Questao> questoes) {
		this.questoes = questoes;
	}

	public Date getDataCriacao() {
		return dataCriacao;
	}

	public void setDataCriacao(Date dataCriacao) {
		this.dataCriacao = dataCriacao;
	}

	public Professor getProfessor() {
		return professor;
	}

	public void setProfessor(Professor professor) {
		this.professor = professor;
	}

	public Integer getQntJogada() {
		return qntJogada;
	}

	public void setQntJogada(Integer qntJogada) {
		this.qntJogada = qntJogada;
	}

	public Materia getMateria() {
		return materia;
	}

	public void setMateria(Materia materia) {
		this.materia = materia;
	}
	
}
