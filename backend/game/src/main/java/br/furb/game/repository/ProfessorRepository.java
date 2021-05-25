package br.furb.game.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.furb.game.model.Professor;

public interface ProfessorRepository extends JpaRepository<Professor, Long> {
	 
}
