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
import br.furb.game.model.Coordenador;
import br.furb.game.service.CoordenadorService;

@RestController
public class CoordenadorController {
	
	@Autowired
	CoordenadorService coordenadorService;
	
	@RequestMapping(value = "/coordenador", method = RequestMethod.POST)
	public ResponseEntity<Coordenador> save(@RequestBody Coordenador coordenador) {
		try {
			return ResponseEntity.ok(coordenadorService.save(coordenador));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}

	@RequestMapping(value = "/coordenador", method = RequestMethod.GET)
	public ResponseEntity<List<Coordenador>> findAll() {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(coordenadorService.findAll());
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}

	@RequestMapping(value = "/coordenador/{id}", method = RequestMethod.GET)
	public ResponseEntity<Coordenador> findById(@PathVariable("id") long id) {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(coordenadorService.findById(id));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}

	@RequestMapping(value = "/coordenador/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Coordenador> update(@PathVariable(value = "id") long id, @RequestBody Coordenador coordenador) {
		try {
			Coordenador coordenadorAnterior = coordenadorService.findById(id);
//			alunoAnterior.set
//			alunoAnterior.setCodigo(aluno.getCodigo());
//			alunoAnterior.setNome(aluno.getNome());
			return ResponseEntity.ok(coordenadorService.save(coordenadorAnterior));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}

	@RequestMapping(value = "/coordenador/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteById(@PathVariable("id") long id) {
		try {
			coordenadorService.deleteById(id);
			return ResponseEntity.status(HttpStatus.OK).body(null);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}

}
