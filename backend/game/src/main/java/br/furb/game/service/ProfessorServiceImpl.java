package br.furb.game.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.furb.game.model.Professor;
import br.furb.game.repository.ProfessorRepository;

@Service
public class ProfessorServiceImpl implements ProfessorService {
	
	@Autowired
	ProfessorRepository professorRepository;

	@Override
	public List<Professor> findAll() {
		return professorRepository.findAll();
	}

	@Override
	public Professor findById(long id) {
		return professorRepository.findById(id).get();
	}

	@Override
	public Professor save(Professor professor) {
		return professorRepository.save(professor);
	}

	@Override
	public void deleteById(long id) {
		professorRepository.deleteById(id);
		
	}

}
