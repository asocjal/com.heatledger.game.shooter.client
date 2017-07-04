package com.heatledger.game.shooter.client;

public class Offer {
	
	public enum TYPE {ask, bid};
	
	double price = 0;
	
	public double getPrice() {
		return price;
	}

}
