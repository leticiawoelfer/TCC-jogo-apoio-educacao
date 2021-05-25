package br.furb.game.service;

import java.util.List;

import br.furb.game.model.Turma;

public interface TurmaService {
	
	List<Turma> findAll();
	
	Turma findById(long id);
	
	Turma save(Turma turma);
	
	void deleteById(long id);

}
