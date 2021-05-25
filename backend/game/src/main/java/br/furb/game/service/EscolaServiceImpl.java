package br.furb.game.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.furb.game.model.Escola;
import br.furb.game.repository.EscolaRepository;

@Service
public class EscolaServiceImpl implements EscolaService {

	@Autowired
	EscolaRepository escolaRepository;
	
	@Override
	public List<Escola> findAll() {
		return escolaRepository.findAll();
	}

	@Override
	public Escola findById(long id) {
		return escolaRepository.findById(null).get();
	}

	@Override
	public Escola save(Escola escola) {
		return escolaRepository.save(escola) ;
	}

	@Override
	public void deleteById(long id) {
		escolaRepository.deleteById(null);
	}

}
