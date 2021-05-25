package br.furb.game.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.furb.game.model.Aluno;
import br.furb.game.repository.AlunoRepository;

@Service
public class AlunoServiceImpl implements AlunoService {

	@Autowired
	AlunoRepository alunoRepository;
	
	@Override
	public List<Aluno> findAll() {
		return alunoRepository.findAll();
	}

	@Override
	public Aluno findById(long id) {
		return alunoRepository.findById(id).get();
	}

	@Override
	public Aluno save(Aluno aluno) {
		return alunoRepository.save(aluno);
	}

	@Override
	public void deleteById(long id) {
		alunoRepository.deleteById(id);
	}

}
