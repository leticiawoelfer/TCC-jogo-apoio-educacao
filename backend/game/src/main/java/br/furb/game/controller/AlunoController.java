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
import br.furb.game.service.AlunoService;

@RestController
public class AlunoController {
	
	@Autowired
	AlunoService alunoService;
	
	@RequestMapping(value = "/aluno", method = RequestMethod.POST)
	public ResponseEntity<Aluno> save(@RequestBody Aluno aluno) {
		try {
			return ResponseEntity.ok(alunoService.save(aluno));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}

	@RequestMapping(value = "/aluno", method = RequestMethod.GET)
	public ResponseEntity<List<Aluno>> findAll() {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(alunoService.findAll());
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}

	@RequestMapping(value = "/aluno/{id}", method = RequestMethod.GET)
	public ResponseEntity<Aluno> findById(@PathVariable("id") long id) {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(alunoService.findById(id));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}

	@RequestMapping(value = "/aluno/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Aluno> update(@PathVariable(value = "id") long id, @RequestBody Aluno aluno) {
		try {
			Aluno alunoAnterior = alunoService.findById(id);
//			alunoAnterior.set
//			alunoAnterior.setCodigo(aluno.getCodigo());
//			alunoAnterior.setNome(aluno.getNome());
			return ResponseEntity.ok(alunoService.save(alunoAnterior));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}

	@RequestMapping(value = "/aluno/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteById(@PathVariable("id") long id) {
		try {
			alunoService.deleteById(id);
			return ResponseEntity.status(HttpStatus.OK).body(null);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}

}
