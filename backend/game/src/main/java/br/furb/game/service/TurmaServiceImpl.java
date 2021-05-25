package br.furb.game.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.furb.game.model.Turma;
import br.furb.game.repository.TurmaRepository;

@Service
public class TurmaServiceImpl implements TurmaService {

	@Autowired
	TurmaRepository turmaRepository;
	
	@Override
	public List<Turma> findAll() {
		return turmaRepository.findAll();
	}

	@Override
	public Turma findById(long id) {
		return turmaRepository.findById(null).get();
	}

	@Override
	public Turma save(Turma turma) {
		return turmaRepository.save(null);
	}

	@Override
	public void deleteById(long id) {
		turmaRepository.deleteById(null);
	}

}
