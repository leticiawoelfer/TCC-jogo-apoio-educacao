package br.furb.game.model;

public enum AnoLetivo {
	
	PRIMEIRO_ANO(1, "1º Ano", "Primeiro ano"),
	SEGUNDO_ANO(2, "2º Ano", "Segundo ano"),
	TERCEIRO_ANO(3, "3º Ano", "Terceiro ano"),
	QUARTO_ANO(4, "4º Ano", "Quarto ano"),
	QUINTO_ANO(5, "5º Ano", "Quinto ano"),
	SEXTO_ANO(6, "6º Ano", "Sexto ano"),
	SETIMO_ANO(7, "7º Ano", "Sétimo ano"),
	OITAVO_ANO(8, "8º Ano", "Oitavo ano"),
	NONO_ANO(9, "9º Ano", "Nono ano");
	
	private Integer codigo;
	private String anoNumerico;
	private String anoExtenso;
	
	private AnoLetivo(Integer codigo, String anoNumerico, String anoExtenso) {
		this.codigo = codigo;
		this.anoNumerico = anoNumerico;
		this.anoExtenso = anoExtenso;
	}

	public Integer getCodigo() {
		return codigo;
	}

	public void setCodigo(Integer codigo) {
		this.codigo = codigo;
	}

	public String getAnoNumerico() {
		return anoNumerico;
	}

	public void setAnoNumerico(String anoNumerico) {
		this.anoNumerico = anoNumerico;
	}

	public String getAnoExtenso() {
		return anoExtenso;
	}

	public void setAnoExtenso(String anoExtenso) {
		this.anoExtenso = anoExtenso;
	}	

}
