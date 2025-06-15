package com.example.NBA.Project.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Getter
@Setter
@Entity
@Table(name = "nbads")
@AllArgsConstructor
@NoArgsConstructor
public class Player {
    @Id
    private int player_id;

    @Column(name = "PLAYER_NAME")
    private String name;

    private String nickname;
    private int team_id;

    @Column(name = "TEAM_ABBREVIATION")
    private String teamAbbreviation;

    private int age;
    private int gp;
    private int w;
    private int l;
    private double w_pct;
    private double min;
    private double fgm;
    private double fga;
    private double fg_pct;
    private double fg3m;
    private double fg3a;
    private double fg3_pct;
    private double ftm;
    private double fta;
    private double ft_pct;
    private double oreb;
    private double dreb;
    private double reb;
    private double ast;
    private double tov;
    private double stl;
    private double blk;
    private double blka;
    private double pf;
    private double pfd;
    private double pts;
    private double plus_minus;
    private int dd2;
    private int td3;

    @Column(name = "season_id")
    private String seasonId;
}
