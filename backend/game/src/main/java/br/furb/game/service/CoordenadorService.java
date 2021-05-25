package br.furb.game.service;

import java.util.List;

import br.furb.game.model.Coordenador;

public interface CoordenadorService {
	
	List<Coordenador> findAll();
	
	Coordenador findById(long id);
	
	Coordenador save(Coordenador coordenador);
	
	void deleteById(long id);

}
