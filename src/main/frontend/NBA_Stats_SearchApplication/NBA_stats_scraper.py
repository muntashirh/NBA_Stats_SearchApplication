from bs4 import BeautifulSoup
import requests
import pandas as pd

season_id = "2023-24"
mode = "PerGame"
season_input = input("Enter a year in the format to get a NBA player that played in that season: XXXX-XX")
url = "https://stats.nba.com/stats/leaguedashplayerstats?College=&Conference=&Country=&DateFrom=&DateTo=&Division=&DraftPick=&DraftYear=&GameScope=&GameSegment=&Height=&ISTRound=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PORound=0&PaceAdjust=N&PerMode=" + mode + "&Period=0&PlayerExperience=&PlayerPosition=&PlusMinus=N&Rank=N&Season=" + season_id + "&SeasonSegment=&SeasonType=Regular%20Season&ShotClockRange=&StarterBench=&TeamID=0&VsConference=&VsDivision=&Weight="
input_url = "https://stats.nba.com/stats/leaguedashplayerstats?College=&Conference=&Country=&DateFrom=&DateTo=&Division=&DraftPick=&DraftYear=&GameScope=&GameSegment=&Height=&ISTRound=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PORound=0&PaceAdjust=N&PerMode=" + mode + "&Period=0&PlayerExperience=&PlayerPosition=&PlusMinus=N&Rank=N&Season=" + season_input + "&SeasonSegment=&SeasonType=Regular%20Season&ShotClockRange=&StarterBench=&TeamID=0&VsConference=&VsDivision=&Weight= "
headers= {
    'User-Agent': 'Mozilla/5.0',
    'x-nba-stats-origin': 'stats',
    'x-nba-stats-token': 'true',
    'Referer': 'https://stats.nba.com',
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'Host': 'stats.nba.com'
}
result = requests.get(url= url, headers= headers).json()
input_result = requests.get(url= input_url, headers= headers).json()
columns = result["resultSets"][0]["headers"]
player_info = result["resultSets"][0]["rowSet"]
player_info_input = input_result["resultSets"][0]["rowSet"]
input_columns = input_result["resultSets"][0]["headers"]
first_nba_player = result["resultSets"][0]["rowSet"][0]

realplayerinfo = result["resultSets"][0]["headers"]
realcolumns = columns[0:6]

df = pd.DataFrame(player_info_input, columns= input_columns)
db = pd.DataFrame(player_info, columns= columns)
df1 = pd.DataFrame(columns= realcolumns)

season_id = ['1996-97',
             '1997-98',
             '1998-99',
             '1999-00',
             '2000-01',
             '2001-02',
             '2002-03',
            '2003-04',
            '2004-05',
            '2005-06',
            '2006-07',
            '2007-08',
            '2008-09',
            '2009-10',
            '2010-11',
            '2011-12',
            '2012-13',
            '2013-14',
            '2014-15',
            '2015-16',
            '2016-17',
            '2017-18',
            '2018-19',
            '2019-20',
            '2020-21',
            '2021-22',
            '2022-23',
            '2023-24']

# add all seasons to an array and display all players for each season(1996-2024)
dfs = []
for s in season_id:
    fl_url = "https://stats.nba.com/stats/leaguedashplayerstats?College=&Conference=&Country=&DateFrom=&DateTo=&Division=&DraftPick=&DraftYear=&GameScope=&GameSegment=&Height=&ISTRound=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PORound=0&PaceAdjust=N&PerMode=" + mode + "&Period=0&PlayerExperience=&PlayerPosition=&PlusMinus=N&Rank=N&Season=" + s + "&SeasonSegment=&SeasonType=Regular%20Season&ShotClockRange=&StarterBench=&TeamID=0&VsConference=&VsDivision=&Weight="
    res = requests.get(url= fl_url, headers= headers).json()
    col = res["resultSets"][0]["headers"]
    players = res["resultSets"][0]["rowSet"]
    dafr = pd.DataFrame(players, columns = col)
    dafr["season_id"] = s
    print(s)
    dfs.append(dafr)
    #print(dfs)
    
    final_df = pd.concat(dfs)
    final_df.to_csv('Player Stats for All NBA Seasons', index= False)


#specificSeason = dafr.loc[df[season_id] == season_id]
#print(db.sample(1))
