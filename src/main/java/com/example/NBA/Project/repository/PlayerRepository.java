package com.example.NBA.Project.repository;

import com.example.NBA.Project.entity.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface PlayerRepository extends JpaRepository<Player,Long> {
    Boolean existsByName(String name);
    Boolean existsByNameAndSeasonId(String name, String seasonId);
    List<Player> findByNameOrderBySeasonIdAsc(String name);

    @Query(value = "SELECT DISTINCT * FROM nbads WHERE player_name = :name ORDER BY season_id ASC", nativeQuery = true)
    List<Player> findPlayerStatsByNameOrdered(@Param("name") String name);

    List<Player> findByName(String name);
    List<Player> findByNameAndSeasonId(String name, String seasonId);
    List<Player> findByTeamAbbreviationAndSeasonId(String teamAbbreviation, String seasonId);
    

}
