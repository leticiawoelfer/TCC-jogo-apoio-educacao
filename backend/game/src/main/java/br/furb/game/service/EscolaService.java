package br.furb.game.service;

import java.util.List;

import br.furb.game.model.Escola;

public interface EscolaService {
	
	List<Escola> findAll();
	
	Escola findById(long id);
	
	Escola save(Escola escola);
	
	void deleteById(long id);

}
