package br.furb.game.model;

public enum TipoProfessor {
	
	DIRETOR(1, "Diretor"),
	PROFESSOR(2, "Professor");
	
	private Integer codigo;
	private String descricao;
	
	private TipoProfessor(Integer codigo, String descricao) {
		this.codigo = codigo;
		this.descricao = descricao;
	}
	
	public Integer getCodigo() {
		return codigo;
	}
	public void setCodigo(Integer codigo) {
		this.codigo = codigo;
	}
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
}
