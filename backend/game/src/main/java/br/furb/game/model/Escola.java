package br.furb.game.model;

import java.util.ArrayList;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Table(name = "escola")
@Entity
public class Escola {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(nullable = false, updatable = false)
	private Integer id;
	
	private String nome;
	
	private String logradouro;
	
	private String numero;
	
	private String cep;
	
	private String bairro;
	
	private String cidade;
	
	private String estado;

	@OneToOne
	private Coordenador coordenador;//seleciona ou cadastra um novo
	
	private ArrayList<Professor> professores;
	
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getLogradouro() {
		return logradouro;
	}
	public void setLogradouro(String logradouro) {
		this.logradouro = logradouro;
	}
	public String getNumero() {
		return numero;
	}
	public void setNumero(String numero) {
		this.numero = numero;
	}
	public String getCep() {
		return cep;
	}
	public void setCep(String cep) {
		this.cep = cep;
	}
	public String getBairro() {
		return bairro;
	}
	public void setBairro(String bairro) {
		this.bairro = bairro;
	}
	public String getCidade() {
		return cidade;
	}
	public void setCidade(String cidade) {
		this.cidade = cidade;
	}
	public String getEstado() {
		return estado;
	}
	public void setEstado(String estado) {
		this.estado = estado;
	}	
	public Coordenador getCoordenador() {
		return coordenador;
	}
	public void setCoordenador(Coordenador coordenador) {
		this.coordenador = coordenador;
	}
	public ArrayList<Professor> getProfessores() {
		return professores;
	}
	public void setProfessores(ArrayList<Professor> professores) {
		this.professores = professores;
	}
	
}
