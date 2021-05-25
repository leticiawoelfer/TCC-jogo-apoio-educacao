package br.furb.game.service;

import java.util.List;

import br.furb.game.model.Professor;

public interface ProfessorService {
	
	List<Professor> findAll();
	
	Professor findById(long id);
	
	Professor save(Professor professor);
	
	void deleteById(long id);

}
