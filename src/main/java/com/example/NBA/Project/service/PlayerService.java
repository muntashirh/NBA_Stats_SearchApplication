package com.example.NBA.Project.service;

import com.example.NBA.Project.entity.Player;
import com.example.NBA.Project.repository.PlayerRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Component
@AllArgsConstructor
public class PlayerService {

    private final PlayerRepository playerRepository;

    public List<Player> findAllPlayers(){
        return playerRepository.findAll();
    }

    public List<Player> findPlayerStats(String name){
        return playerRepository.findPlayerStatsByNameOrdered(name);
    }
    public List<Player> playerStats(String name){
        return playerRepository.findAll().stream()
                .filter(player -> player.getName().toLowerCase().contains(name))
                .toList();
    }
    public List<Player> findPlayerbySeason(String player_name, String seasonId){
        return playerRepository.findByNameAndSeasonId(player_name,seasonId);
    }

    public List<Player> findPlayersfromTeamInSeason(String teamAbbreviation, String season_id){
        //returns all players within the given team and seasonId
        return playerRepository.findByTeamAbbreviationAndSeasonId(teamAbbreviation,season_id);
    }
    public ResponseEntity<?> responseforGivenPlayerandSeason(String name, String seasonId){
        if(!playerRepository.existsByNameAndSeasonId(name,seasonId))
        {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body((Map.of("message", "No stats found", "status", 404)));
        }
        return ResponseEntity.ok(Map.of("message", "Success", "status", 200, "data", playerRepository.findByNameAndSeasonId(name, seasonId)));
        }
    }
