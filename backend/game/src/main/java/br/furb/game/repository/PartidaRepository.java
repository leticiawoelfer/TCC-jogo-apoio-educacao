package br.furb.game.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.furb.game.model.Partida;

public interface PartidaRepository extends JpaRepository<Partida, Long>  {

}
