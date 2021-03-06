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
import br.furb.game.model.Professor;
import br.furb.game.service.ProfessorService;

@RestController
public class ProfessorController {
	
	@Autowired
	ProfessorService professorService;
	
	@RequestMapping(value = "/professor", method = RequestMethod.POST)
	public ResponseEntity<Professor> save(@RequestBody Professor professor) {
		try {
			return ResponseEntity.ok(professorService.save(professor));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}

	@RequestMapping(value = "/professor", method = RequestMethod.GET)
	public ResponseEntity<List<Professor>> findAll() {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(professorService.findAll());
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}

	@RequestMapping(value = "/professor/{id}", method = RequestMethod.GET)
	public ResponseEntity<Professor> findById(@PathVariable("id") long id) {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(professorService.findById(id));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}

	@RequestMapping(value = "/professor/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Professor> update(@PathVariable(value = "id") long id, @RequestBody Professor professor) {
		try {
			Professor professorAnterior = professorService.findById(id);
			
			return ResponseEntity.ok(professorService.save(professorAnterior));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}

	@RequestMapping(value = "/professor/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteById(@PathVariable("id") long id) {
		try {
			professorService.deleteById(id);
			return ResponseEntity.status(HttpStatus.OK).body(null);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}

}
