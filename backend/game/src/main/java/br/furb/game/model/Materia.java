package br.furb.game.model;

public enum Materia {
	
	PORTUGUES(1, "Português", "PORT"),
	MATEMATICA(2, "Matemática", "MAT"),
	BIOLOGIA(3, "Biologia", "BIO"),
	QUIMICA(4, "Química", "QUI"),
	HISTORIA(5, "História", "HIS"),
	GEOGRAFIA(6, "Geografia", "GEO"),
	FILOSOFIA(7, "Filosofia", "FIL"),
	ENSINO_RELIGIOSO(8, "Ensino Religioso", "ENS_RLG"),
	ARTES(9, "Artes", "ART"),
	CONHECIMENTOS_GERAIS(10, "Conhecimento Gerais", "CON_GER"),
	INGLES(11, "Inglês", "ING"),
	ESPANHOL(12, "Espanhol", "ESP"),
	OUTRA_LINGUA(13, "Outra Língua", "OUT_LING"),
	DIVERSAS_MISTAS(14, "Matérias diversas/Misturadas", "DIV_MIST"),
	OUTRO(15, "Outra", "OUTRO");
	
	private Integer codigo;
	private String nome;
	private String abreviaturas;
	
	private Materia(Integer codigo, String nome, String abreviaturas) {
		this.codigo = codigo;
		this.nome = nome;
		this.abreviaturas = abreviaturas;
	}

	public Integer getCodigo() {
		return codigo;
	}

	public void setCodigo(Integer codigo) {
		this.codigo = codigo;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getAbreviaturas() {
		return abreviaturas;
	}

	public void setAbreviaturas(String abreviaturas) {
		this.abreviaturas = abreviaturas;
	}
	
}
