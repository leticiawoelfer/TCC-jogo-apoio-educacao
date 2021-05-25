package br.furb.game.service;

import java.util.List;

import br.furb.game.model.Aluno;

public interface AlunoService {

	List<Aluno> findAll();
	
	Aluno findById(long id);
	
	Aluno save(Aluno aluno);
	
	void deleteById(long id);
	
}
