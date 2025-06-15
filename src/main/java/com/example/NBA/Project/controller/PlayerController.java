package com.example.NBA.Project.controller;

import com.example.NBA.Project.entity.Player;
import com.example.NBA.Project.repository.PlayerRepository;
import com.example.NBA.Project.service.PlayerService;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/player")
@AllArgsConstructor
public class PlayerController {
    private final PlayerService playerService;

    @GetMapping("/careerstats")
    public List<Player> getPlayer(@RequestParam String name) {
        return playerService.findPlayerStats(name);
    }

    @GetMapping("/allplayers")
    public List<Player> findAllPlayers() {
        return playerService.findAllPlayers();
    }

    @GetMapping()
    public List<Player> getPlayerbySeasonID(@RequestParam String name, @RequestParam String seasonId) {
        System.out.println("Searching for " + name + "..." + "Searching for season:" + seasonId);
        return playerService.findPlayerbySeason(name, seasonId);
    }

  @GetMapping("/response")
    public ResponseEntity<?>  getResponsePlayerbySeasonID(@RequestParam String name, @RequestParam String seasonId) {
      return playerService.responseforGivenPlayerandSeason(name, seasonId);
    }
  @GetMapping("/teams")
    public List<Player> getPlayersfromTeamSeasonId(@RequestParam String teamAbbreviation,@RequestParam String seasonId){
        return playerService.findPlayersfromTeamInSeason(teamAbbreviation,seasonId);
  }
    }
