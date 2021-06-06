package br.furb.game.model;

import java.util.List;

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
	
	@OneToOne
	@JoinColumn(name = "idProfessorRegente")
	private Professor professorRegente;
	
	@OneToMany(mappedBy = "turma")
	private List<Aluno> alunos;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCodigo() {
		return codigo;
	}

	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}

	public Escola getEscola() {
		return escola;
	}

	public void setEscola(Escola escola) {
		this.escola = escola;
	}

	public Professor getProfessorRegente() {
		return professorRegente;
	}

	public void setProfessorRegente(Professor professorRegente) {
		this.professorRegente = professorRegente;
	}

	public List<Aluno> getAlunos() {
		return alunos;
	}

	public void setAlunos(List<Aluno> alunos) {
		this.alunos = alunos;
	}	

}
