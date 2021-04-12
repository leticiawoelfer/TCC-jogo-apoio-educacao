package br.furb.game.model;

public enum NivelAcesso {
	
	DIRETOR(1, "Diretor"),
	PROFESSOR(2, "Professor"),
	ALUNO(3, "aluno");
	
	private Integer codigo;
	private String descricao;
	
	private NivelAcesso(Integer codigo, String descricao) {
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
