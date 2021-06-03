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
import br.furb.game.model.Escola;
import br.furb.game.service.EscolaService;

@RestController
public class EscolaController {
	
	@Autowired
	EscolaService escolaService;
	
	@RequestMapping(value = "/escola", method = RequestMethod.POST)
	public ResponseEntity<Escola> save(@RequestBody Escola escola) {
		try {
			return ResponseEntity.ok(escolaService.save(escola));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}

	@RequestMapping(value = "/escola", method = RequestMethod.GET)
	public ResponseEntity<List<Escola>> findAll() {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(escolaService.findAll());
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}

	@RequestMapping(value = "/escola/{id}", method = RequestMethod.GET)
	public ResponseEntity<Escola> findById(@PathVariable("id") long id) {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(escolaService.findById(id));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}

	@RequestMapping(value = "/escola/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Escola> update(@PathVariable(value = "id") long id, @RequestBody Escola escola) {
		try {
			Escola escolaAnterior = escolaService.findById(id);
			escolaAnterior.setBairro(escola.getBairro());
			escolaAnterior.setCep(escola.getCep());
			escolaAnterior.setCidade(escola.getCidade());
			escolaAnterior.setEstado(escola.getEstado());
			escolaAnterior.setLogradouro(escola.getLogradouro());
			escolaAnterior.setNome(escola.getNome());
			escolaAnterior.setNumero(escola.getNumero());
			return ResponseEntity.ok(escolaService.save(escolaAnterior));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}

	@RequestMapping(value = "/escola/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteById(@PathVariable("id") long id) {
		try {
			escolaService.deleteById(id);
			return ResponseEntity.status(HttpStatus.OK).body(null);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}

}
