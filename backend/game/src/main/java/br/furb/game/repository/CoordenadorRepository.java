package br.furb.game.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.furb.game.model.Coordenador;
import br.furb.game.model.Professor;

public interface CoordenadorRepository extends JpaRepository<Coordenador, Long> {

}
