package com.devsuperior.dspesquisa.services;

import java.time.Instant;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dspesquisa.entities.Game;
import com.devsuperior.dspesquisa.entities.Record;
import com.devsuperior.dspesquisa.entities.dto.RecordDTO;
import com.devsuperior.dspesquisa.entities.dto.RecordInsertDTO;
import com.devsuperior.dspesquisa.repositories.GameRepository;
import com.devsuperior.dspesquisa.repositories.RecordRepository;

@Service
public class RecordService {

	private RecordRepository recordRepository;
	private GameRepository gameRepository;
	
	public RecordService(RecordRepository recordRepository, GameRepository gameRepository) {
		this.recordRepository = recordRepository;
		this.gameRepository = gameRepository;
	} 
	
	@Transactional
	public RecordDTO insert(RecordInsertDTO dto) {
		Record entity = new Record();
		
		entity.setName(dto.getName());
		entity.setAge(dto.getAge());
		entity.setMonent(Instant.now());
		
		Game game = gameRepository.getOne(dto.getGameId());
		
		entity.setGame(game);
		
		entity = recordRepository.save(entity);
		
		return  new RecordDTO(entity);
	}
	
}
