package br.furb.game.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.furb.game.model.Aluno;

public interface AlunoRepository extends JpaRepository<Aluno, Long> {

}
