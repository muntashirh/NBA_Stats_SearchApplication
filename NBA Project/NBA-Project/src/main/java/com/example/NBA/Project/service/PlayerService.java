package com.example.NBA.Project.service;

import com.example.NBA.Project.entity.Player;
import com.example.NBA.Project.repository.PlayerRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
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
    public List<Player> findPlayerbySeason(String player_name, String season_id){
        return playerRepository.findByNameAndSeasonId(player_name,season_id);
    }

    public List<Player> findPlayersfromTeamInSeason(String team, String season_id){
        return playerRepository.findAll().stream()
                .filter(player -> team.equals(player.getTeam_abbreviation()) && player.getSeasonId().toLowerCase().contains(season_id))
                .collect(Collectors.toList());
    }

    }
