package br.furb.game.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.furb.game.model.Coordenador;
import br.furb.game.repository.CoordenadorRepository;

@Service
public class CoordenadorServiceImpl implements CoordenadorService {
	
	@Autowired
	CoordenadorRepository coordenadorRepository;

	@Override
	public List<Coordenador> findAll() {
		return coordenadorRepository.findAll();
	}

	@Override
	public Coordenador findById(long id) {
		return coordenadorRepository.findById(null).get();
	}

	@Override
	public Coordenador save(Coordenador coordenador) {
		return coordenadorRepository.save(coordenador);
	}

	@Override
	public void deleteById(long id) {
		coordenadorRepository.deleteById(null);		
	}

}
