package com.heatledger.game.shooter.client;

import java.util.ArrayList;
import java.util.List;

import com.heatledger.game.shooter.client.view.TankView;

public class GameData {

	public List<TankView> team1Tanks = new ArrayList<TankView>();
	public List<TankView> team2Tanks = new ArrayList<TankView>();
	
	public List<TankView> getTeam1Tanks() {
		return team1Tanks;
	}
	
	
}
