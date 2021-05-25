package br.furb.game.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.furb.game.model.Aluno;
import br.furb.game.model.Turma;
import br.furb.game.service.TurmaService;

@RestController
public class TurmaController {
	
	@Autowired
	TurmaService turmaService;
	
	@RequestMapping(value = "/turma", method = RequestMethod.POST)
	public ResponseEntity<Turma> save(@RequestBody Turma turma) {
		try {
			return ResponseEntity.ok(turmaService.save(turma));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}

	@RequestMapping(value = "/turma", method = RequestMethod.GET)
	public ResponseEntity<List<Turma>> findAll() {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(turmaService.findAll());
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}

	@RequestMapping(value = "/turma/{id}", method = RequestMethod.GET)
	public ResponseEntity<Turma> findById(@PathVariable("id") long id) {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(turmaService.findById(id));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}

	@RequestMapping(value = "/turma/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Turma> update(@PathVariable(value = "id") long id, @RequestBody Turma turma) {
		try {
			Turma turmaAnterior = turmaService.findById(id);
//			alunoAnterior.set
//			alunoAnterior.setCodigo(aluno.getCodigo());
//			alunoAnterior.setNome(aluno.getNome());
			return ResponseEntity.ok(turmaService.save(turmaAnterior));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}

	@RequestMapping(value = "/turma/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteById(@PathVariable("id") long id) {
		try {
			turmaService.deleteById(id);
			return ResponseEntity.status(HttpStatus.OK).body(null);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}

}
