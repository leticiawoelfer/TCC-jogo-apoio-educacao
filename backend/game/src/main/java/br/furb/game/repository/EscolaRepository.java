package br.furb.game.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.furb.game.model.Escola;

public interface EscolaRepository extends JpaRepository<Escola, Long> {

}
