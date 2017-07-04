package com.heatledger.game.shooter.client.objects;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import com.heatledger.game.shooter.client.Offer;
import com.heatledger.game.shooter.client.view.DrawCanvas;
import com.heatledger.game.shooter.client.view.ElementView;
import com.heatledger.game.shooter.client.view.ElementsToDraw;
import com.heatledger.game.shooter.client.view.TankView;

public class Tanks implements ElementView {
	
	private final ElementsToDraw elementsToDraw;
	private final TankView.Type type;
	private List<TankView> tanks = new ArrayList<TankView>();
	private int width = 84;
	
	
	public Tanks(ElementsToDraw elementsToDraw, TankView.Type type) {
		this.elementsToDraw = elementsToDraw;
		this.type = type;
	}
	
	private boolean contains(List<TankView> tanks, TankView tankView) {
		for(TankView nextTankView : tanks) {
			if(nextTankView.getX() == tankView.getX()) {
				return true;
			}
		}
		return false;
	}
	
	public void refreshElementsToDraw(List<Offer> offers) {
		
		if(offers == null) {
			throw new RuntimeException("Offers list cannot be null");
		}
//		elementsToDraw.getList().clear();
		
		List<TankView> existingTanks = new ArrayList<TankView>();
		
		for(Offer ask : offers) {
			TankView newTank;
			if(type == TankView.Type.red) {
				newTank = new TankView(100 + (int)(ask.getPrice()/100000000L), 0, type);
			} else if(type == TankView.Type.green) {
				newTank = new TankView(100 - width + (int)(ask.getPrice()/100000000L), 0, type);
			} else {
				throw new RuntimeException("Unknown tank type: " + type);
			}
			existingTanks.add(newTank);
			if(!contains(tanks, newTank)) {
				tanks.add(newTank);
			}
		}
		
		/* Thread safe remove */
		Iterator<TankView> i = tanks.iterator(); 
		while (i.hasNext()) {
			TankView nextTank = i.next();
			   if(!contains(existingTanks, nextTank)) {
				   i.remove();
			   }
			}
		
		int y = 10;
		for(TankView tank : tanks) {
			tank.setCooridnates(tank.getX(), y);
			y += 100;
		}
		if(type == TankView.Type.red) {
			elementsToDraw.assign("red-tanks", tanks);
		} else if(type == TankView.Type.green) {
			elementsToDraw.assign("green-tanks", tanks);
		} else {
			throw new RuntimeException("Unknown tank type: " + type);
		}
	}

	@Override
	public void draw(DrawCanvas drawCanvas) {
		// TODO Auto-generated method stub
		
	}
	
	

}
